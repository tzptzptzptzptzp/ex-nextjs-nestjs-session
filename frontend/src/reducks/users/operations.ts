import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "./types";
import { config } from "@/config/api.config";
import { SignUp } from "@/utils/SignUp.util";

export const SignUpVerify = createAsyncThunk(
  "user/signUp",
  async (req: UserType) => {
    await SignUp(req);
    const res = await axios.get(`${config.API_BASE_URL}session/verify`, {
      withCredentials: true,
    });
    return res.data;
  }
);
