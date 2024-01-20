import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { UsersEntity } from './model/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly firebaseService: FirebaseService) {}

  /**
   * ユーザーサインアップ関数
   * @param email
   * @param password
   * @param uid
   */
  async userSignup(
    email: string,
    password: string,
    uid: string,
  ): Promise<string> {
    if (await this.userExists(email)) {
      throw new HttpException(
        '既にユーザーデータが存在します。',
        HttpStatus.CONFLICT,
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userRef = await this.firebaseService.getCollectionRef('users');
    const accountData = new UsersEntity({
      email: email,
      password: hashPassword,
      username: '',
    });

    try {
      await this.firebaseService.upsertDoc(userRef, uid, accountData);
    } catch (err) {
      console.error(err);
      throw new Error('Firebaseへのデータの登録・更新に失敗しました。');
    }
    return 'Firebaseへのデータの登録・更新に成功しました。';
  }

  /**
   * ユーザーデータ既存判定関数
   * @param email
   */
  async userExists(email: string): Promise<boolean> {
    const userRef = await this.firebaseService.getCollectionRef('users');
    const snapshot = await userRef.where('email', '==', email).get();
    return !snapshot.empty;
  }
}
