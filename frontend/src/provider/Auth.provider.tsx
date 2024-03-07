"use client";
import { useEffect, useState } from "react";
import { useVerifySessionDispatch } from "@/reducks/users/dispatches";
import { userSelector } from "@/reducks/users/selecors";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loading } = userSelector();
  useEffect(() => {
    useVerifySessionDispatch();
  }, []);
  useEffect(() => {
    if (loading) {
      setIsLoading(false);
    }
  }, [loading]);

  if (loading) return <div>...loading</div>;

  if (!isLoading) return <>{children}</>;
};
