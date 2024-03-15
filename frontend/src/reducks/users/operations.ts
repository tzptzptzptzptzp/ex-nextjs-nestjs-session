import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInType, SignUpType } from "./types";
import { signUp } from "@/utils/signUp.util";
import { signIn } from "@/utils/signIn.util";
import { verifySession } from "@/utils/verifySession.util";

export const SignUpVerify = createAsyncThunk(
  "user/signUpVerify",
  async (req: SignUpType) => {
    await signUp(req);
    const user = await verifySession();
    return user;
  }
);

export const SignInVerify = createAsyncThunk(
  "user/signInVerify",
  async (req: SignInType) => {
    console.log(req);

    await signIn(req);
    const user = await verifySession();
    console.log(user);

    return user;
  }
);

export const VerifySession = createAsyncThunk(
  "user/verifySession",
  async () => {
    const user = await verifySession();
    return user;
  }
);
