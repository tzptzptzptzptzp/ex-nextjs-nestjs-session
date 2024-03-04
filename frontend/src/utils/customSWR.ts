import { config } from "@/config/api.config";
import useSWR from "swr";

type Method = "GET" | "POST" | "PUT" | "DELETE";
type Credentials = "include" | "omit" | "same-origin";

type customSWRType = {
  credentials?: Credentials;
  endpoint: string;
  method?: Method;
};

export const customSWR = ({
  credentials = "same-origin",
  endpoint,
  method = "GET",
}: customSWRType) => {
  const fetcher = (url: string) =>
    fetch(`${config.API_BASE_URL}${url}`, {
      method,
      credentials,
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return { data, error, isLoading };
};
