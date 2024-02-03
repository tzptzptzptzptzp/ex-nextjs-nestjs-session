import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between w-full p-4 shadow-md">
      <div className="text-[1.5rem]">Logo</div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
          <li>
            <Link href="/signin">SignIn</Link>
          </li>
          <li>
            <Link href="/signout">SignOut</Link>
          </li>
          <li className="w-8 h-8 rounded-full bg-gray-400"></li>
        </ul>
      </nav>
    </header>
  );
};
