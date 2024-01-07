import { IsEmail, IsString, Length } from 'class-validator';

export type UserType = {
  email: string;
  username: string;
};

export class UsersEntity {
  constructor({ email, username }: UserType) {
    this.email = email;
    this.username = username;
  }

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(1, 20)
  username: string;
}
