import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { UsersEntity } from './model/users.entity';
import * as bcrypt from 'bcrypt';
import { SessionService } from 'src/session/session.service';

@Injectable()
export class UserService {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly sessionService: SessionService,
  ) {}

  /**
   * サインアップ
   * @param email
   * @param password
   * @param uid
   */
  async userSignup(
    email: string,
    password: string,
    uid: string,
  ): Promise<string> {
    await this.validateUserNotExist(email);

    const hashPassword = await bcrypt.hash(password, 10);
    const accountData = new UsersEntity({
      email: email,
      password: hashPassword,
      username: '',
    });

    await this.saveUserData(uid, accountData);

    const token = await this.sessionService.createToken(uid);
    return token;
  }

  /**
   * サインイン
   * @param email
   * @param password
   */
  async userSignIn(email: string, password: string): Promise<string> {
    const user = await this.findUserByEmail(email);

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new HttpException(
        'パスワードが一致しません。',
        HttpStatus.BAD_REQUEST,
      );
    }

    const token = await this.sessionService.createToken(user.uid);
    return token;
  }

  /**
   * ユーザーデータ取得
   * @param email
   */
  private async findUserByEmail(email: string): Promise<any> {
    const userRef = await this.firebaseService.getCollectionRef('users');
    const snapshot = await userRef.where('email', '==', email).get();

    if (snapshot.empty) {
      throw new HttpException(
        'ユーザーデータが存在しません。',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return snapshot.docs[0].data();
  }

  /**
   * ユーザーデータ登録
   * @param uid
   * @param accountData
   */
  private async saveUserData(
    uid: string,
    accountData: UsersEntity,
  ): Promise<void> {
    const userRef = await this.firebaseService.getCollectionRef('users');
    try {
      await this.firebaseService.upsertDoc(userRef, uid, accountData);
    } catch (err) {
      throw new HttpException(
        'Firebaseへのデータの登録・更新に失敗しました。',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * ユーザー既存判定
   * @param email
   */
  private async userExists(email: string): Promise<boolean> {
    const userRef = await this.firebaseService.getCollectionRef('users');
    const snapshot = await userRef.where('email', '==', email).get();
    return !snapshot.empty;
  }

  /**
   * ユーザー既存例外処理
   * @param email
   */
  private async validateUserNotExist(email: string): Promise<void> {
    if (await this.userExists(email)) {
      throw new HttpException(
        '既にユーザーデータが存在します。',
        HttpStatus.CONFLICT,
      );
    }
  }
}
