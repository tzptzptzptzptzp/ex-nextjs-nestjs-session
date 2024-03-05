export type UserType = {
  password: string;
  username: string;
  email: string;
};

export type UserStateType = {
  user: UserType;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};
