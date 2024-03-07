import { store } from "../store";
import { UserType } from "./types";
import { SignUpVerify } from "./operations";

export const useSignUpVerifyDispatch = (req: UserType) => {
  store.dispatch(SignUpVerify(req));
};
