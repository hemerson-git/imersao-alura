import Image from "next/image";
import { Logo } from "../Logo";

interface HeaderProps {
  githubUser: string;
  menuItems: string[];
}

export function Header({ githubUser, menuItems }: HeaderProps) {
  return (
    <header
      className="
        flex items-center justify-between h-14 border border-solid border-gray-800
        gap-4 fixed w-full bg-zinc-500 
      "
    >
      <Logo />

      <nav>
        <ul className="flex flex-1 gap-2 justify-end font-bold">
          {menuItems?.map((menuItem, index) => (
            <li
              key={index}
              className="hover:underline hover:underline-offset-2"
            >
              <a href="" className="hover:opacity-50 transition-opacity">
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
