export type UserType = {
  password: string;
  username: string;
  email: string;
};

export type UserStateType = {
  user: UserType | null;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};
