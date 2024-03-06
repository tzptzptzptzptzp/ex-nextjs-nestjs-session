import axios from "axios";
import Cookie from "js-cookie";
import { config } from "@/config/api.config";
import { UserType } from "@/reducks/users/types";

export const SignUp = async (req: UserType) => {
  try {
    const res = await axios.post(`${config.API_BASE_URL}user/create`, {
      email: req.email,
      password: req.password,
    });
    const token = res.data;
    Cookie.set("authorization", token, { expires: 1 });
  } catch (err) {
    throw err;
  }
};
