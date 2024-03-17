import { userSelector } from "@/reducks/users/selecors";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export const SessionFrame = ({ children }: Props) => {
  const router = useRouter();
  const state = userSelector();

  if (!state.user) router.push("/signin");

  if (state.user && !state.loading) return children;
};
