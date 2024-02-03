"use client";
import { SignUpContainer } from "@/components/organisms/SignUpContainer";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:8080/session/verify",
    fetcher
  );
  console.log(data);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <SignUpContainer />
    </main>
  );
}
