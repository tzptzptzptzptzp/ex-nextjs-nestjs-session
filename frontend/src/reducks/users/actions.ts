import { UsersStateType } from "./types";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: UsersStateType) => {
  return {
    type: "SIGN_IN",
    payload: userState,
  };
};

export const VERIFY_TOKEN = "VERIFY_TOKEN";
export const verifyTokenAction = (userState: UsersStateType) => {
  return {
    type: "VERIFY_TOKEN",
    payload: userState,
  };
};
