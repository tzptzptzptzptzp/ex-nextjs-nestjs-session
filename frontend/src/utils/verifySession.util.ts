import axios from "axios";
import { config } from "@/config/api.config";

export const verifySession = async () => {
  const res = await axios.get(`${config.API_BASE_URL}session/verify`, {
    withCredentials: true,
  });
  return res.data.user;
};
