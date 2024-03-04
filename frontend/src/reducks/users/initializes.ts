import { UserStateType } from "./types";

export const initialUserState: UserStateType = {
  user: {
    email: "",
    password: "",
    username: "",
  },
  loading: false,
  error: false,
  errorMessage: "",
};
