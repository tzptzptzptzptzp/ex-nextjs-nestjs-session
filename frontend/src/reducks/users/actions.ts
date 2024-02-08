import { UsersStateType } from "./types";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: UsersStateType) => {
  return {
    type: "SIGN_IN",
    payload: userState,
  };
};
