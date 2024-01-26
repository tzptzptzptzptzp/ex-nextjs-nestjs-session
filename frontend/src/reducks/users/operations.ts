import axios from "axios";
import Cookie from "js-cookie";

import { SignUp as SignUpType } from "./types";

export const SignUp = async (req: SignUpType) => {
  try {
    const response = await axios.post("http://localhost:8080/user/create", {
      email: req.email,
      password: req.password,
    });
    const token = response.data;
    Cookie.set("token", token, { expires: 1 });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
