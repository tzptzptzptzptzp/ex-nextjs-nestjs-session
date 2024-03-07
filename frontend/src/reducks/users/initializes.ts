import { UserStateType } from "./types";

export const initialUserState: UserStateType = {
  user: null,
  loading: false,
  error: false,
  errorMessage: "",
};
