"use client";
import { useRouter } from "next/navigation";
import { userSelector } from "@/reducks/users/selecors";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard.molecule";

export default function Mypage() {
  const router = useRouter();
  const { user } = userSelector();

  if (!user) router.push("/signin");
  else
    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-36">
        <ProfileCard email={user?.email} username={user?.username} />
      </main>
    );
}
