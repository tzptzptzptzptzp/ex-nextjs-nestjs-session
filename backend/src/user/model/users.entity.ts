import { IsEmail, IsString, Length, Matches } from 'class-validator';

export type UserType = {
  email: string;
  password: string;
  username: string;
};

export class UsersEntity {
  constructor({ email, password, username }: UserType) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 100)
  @Matches(/[A-Z]/)
  @Matches(/[a-z]/)
  @Matches(/[0-9]/)
  @Matches(/[@$!%*#?&]/)
  password: string;

  @IsString()
  @Length(1, 20)
  username: string;
}
