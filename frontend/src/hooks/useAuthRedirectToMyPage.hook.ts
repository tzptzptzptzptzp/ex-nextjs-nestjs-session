import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { userSelector } from "@/reducks/users/selecors";

export const useAuthRedirectToMyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user } = userSelector();

  useEffect(() => {
    if (user) {
      router.push("/mypage");
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  return isLoading;
};
