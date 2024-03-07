import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "./types";
import { config } from "@/config/api.config";
import { signUp } from "@/utils/signUp.util";

export const SignUpVerify = createAsyncThunk(
  "user/signUpVerify",
  async (req: UserType) => {
    await signUp(req);
    const res = await axios.get(`${config.API_BASE_URL}session/verify`, {
      withCredentials: true,
    });
    return res.data.user;
  }
);
