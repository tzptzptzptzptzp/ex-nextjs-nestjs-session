import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "./types";
import { signUp } from "@/utils/signUp.util";
import { verifySession } from "@/utils/verifySession.util";

export const SignUpVerify = createAsyncThunk(
  "user/signUpVerify",
  async (req: UserType) => {
    await signUp(req);
    const user = await verifySession();
    return user;
  }
);
