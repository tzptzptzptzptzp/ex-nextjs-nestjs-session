import { store } from "../store";
import { SignUpVerify, VerifySession } from "./operations";
import { SignUpType } from "./types";

export const useSignUpVerifyDispatch = (req: SignUpType) => {
  store.dispatch(SignUpVerify(req));
};

export const useVerifySessionDispatch = () => {
  store.dispatch(VerifySession());
};
