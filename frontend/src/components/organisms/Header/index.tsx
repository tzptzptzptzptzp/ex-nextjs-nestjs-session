"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userSelector } from "@/reducks/users/selecors";
import { initializeUser } from "@/reducks/users/slices";
import { signOut } from "@/utils/signOut.util";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = userSelector();

  const handleSignOut = () => {
    signOut();
    dispatch(initializeUser());
    router.push("/");
  };
  return (
    <header className="flex justify-between w-full p-4 shadow-md">
      <div className="text-[1.5rem]">Logo</div>
      <nav>
        <ul className="flex items-center gap-4">
          {user ? (
            <>
              <li>
                <button onClick={handleSignOut}>SignOut</button>
              </li>
              <li className="w-8 h-8 rounded-full bg-gray-400"></li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup">SignUp</Link>
              </li>
              <li>
                <Link href="/signin">SignIn</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
