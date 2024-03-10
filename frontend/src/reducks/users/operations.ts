import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpType } from "./types";
import { signUp } from "@/utils/signUp.util";
import { verifySession } from "@/utils/verifySession.util";

export const SignUpVerify = createAsyncThunk(
  "user/signUpVerify",
  async (req: SignUpType) => {
    await signUp(req);
    const user = await verifySession();
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
