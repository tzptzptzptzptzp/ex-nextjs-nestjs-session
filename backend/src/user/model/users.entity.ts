import { IsEmail, IsString, Length } from 'class-validator';

export type UserType = {
  email: string;
  username: string;
};

export class UsersEntity {}
