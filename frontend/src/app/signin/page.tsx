"use client";
import { SignInContainer } from "@/components/organisms/SignInContainer";
import { useAuthRedirectToMyPage } from "@/hooks/useAuthRedirectToMyPage.hook";

export default function Home() {
  const isLoading = useAuthRedirectToMyPage();

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-36">
      <SignInContainer />
    </main>
  );
}
