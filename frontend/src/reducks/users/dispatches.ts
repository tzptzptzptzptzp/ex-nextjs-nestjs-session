import { store } from "../store";
import { SignInVerify, SignUpVerify, VerifySession } from "./operations";
import { SignInType, SignUpType } from "./types";

export const useSignUpVerifyDispatch = (req: SignUpType) => {
  store.dispatch(SignUpVerify(req));
};

export const useSignInVerifyDispatch = (req: SignInType) => {
  store.dispatch(SignInVerify(req));
};

export const useVerifySessionDispatch = () => {
  store.dispatch(VerifySession());
};
