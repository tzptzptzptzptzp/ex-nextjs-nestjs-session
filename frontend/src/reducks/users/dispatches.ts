import { store } from "../store";
import { SignUpVerify, VerifySession } from "./operations";
import { UserType } from "./types";

export const useSignUpVerifyDispatch = (req: UserType) => {
  store.dispatch(SignUpVerify(req));
};

export const useVerifySessionDispatch = () => {
  store.dispatch(VerifySession());
};
