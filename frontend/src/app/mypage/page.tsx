"use client";
import { userSelector } from "@/reducks/users/selecors";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard.molecule";
import { SessionFrame } from "@/components/templates/sessionFrame.template";

export default function Mypage() {
  const { user } = userSelector();
  if (user)
    return (
      <SessionFrame>
        <main className="flex flex-col items-center justify-between min-h-screen p-36">
          <ProfileCard email={user?.email} username={user?.username} />
        </main>
      </SessionFrame>
    );
}
