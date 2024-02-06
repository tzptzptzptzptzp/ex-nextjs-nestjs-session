"use client";
import { useEffect, useState } from "react";

import useSWR from "swr";

import { Header } from "@/components/organisms/Header";

const API_URL = "http://localhost:8080/session/verify";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());

export default function Template({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState(null);

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  useEffect(() => {
    if (data && data.vaild) {
      setSession(data);
    } else {
      setSession(null);
    }
  }, [data]);

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (isLoading) return;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
