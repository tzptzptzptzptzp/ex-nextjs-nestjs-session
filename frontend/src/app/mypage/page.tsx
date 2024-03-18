"use client";
import { useRouter } from "next/navigation";
import { userSelector } from "@/reducks/users/selecors";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard.molecule";
import { SessionFrame } from "@/components/templates/sessionFrame.template";

export default function Mypage() {
  const router = useRouter();
  const { user, loading } = userSelector();

  if (loading)
    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-36">
        <div>Loading...</div>
      </main>
    );

  if (!user) router.push("/signin");

  if (user && !loading)
    return (
      <SessionFrame>
        <main className="flex flex-col items-center justify-between min-h-screen p-36">
          <ProfileCard email={user?.email} username={user?.username} />
        </main>
      </SessionFrame>
    );
}
