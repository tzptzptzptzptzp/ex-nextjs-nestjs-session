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

export type SignUpType = {
  email: string;
  password: string;
  username: string;
};

export type SignInType = {
  email: string;
  password: string;
};
