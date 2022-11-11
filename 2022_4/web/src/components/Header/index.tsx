import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Logo } from "../Logo";
import { Search } from "../Search";

interface HeaderProps {
  githubUser: string;
  menuItems?: string[];
  onChangeSearchValue: (value: string) => void;
}

export function Header({
  githubUser,
  onChangeSearchValue,
  menuItems,
}: HeaderProps) {
  const [search, setSearch] = useState("");

  function handleSearch(query: string) {
    onChangeSearchValue(query);
  }

  return (
    <header
      className="
        flex items-center justify-between h-14 border border-solid border-gray-800
        gap-4 fixed w-full bg-zinc-500 px-4
      "
    >
      <Logo />

      <Search
        onClick={() => handleSearch(search)}
        placeholder="Digite a sua busca"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {menuItems && (
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
      )}
    </header>
  );
}
