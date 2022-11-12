import { useState } from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { useTheme } from "../../hooks/useTheme";
import * as Switch from "@radix-ui/react-switch";
import { Moon, Sun } from "phosphor-react";

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
  const { theme, toggleTheme } = useTheme();

  function handleSearch(query: string) {
    onChangeSearchValue(query);
  }

  return (
    <header
      className={`
        flex items-center justify-between h-14 border border-solid
        gap-4 fixed w-full ${
          theme === "DARK"
            ? "bg-zinc-500 border-gray-800"
            : "bg-white border-gray-100"
        } px-4
      `}
    >
      <Logo />

      <div className="flex items-center gap-4">
        <Search
          onClick={() => handleSearch(search)}
          placeholder="Digite a sua busca"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <Switch.Root
          onClick={toggleTheme}
          className="w-10 h-6 bg-zinc-900 rounded-xl relative aria-checked:bg-zinc-400"
          type="button"
        >
          <Switch.Thumb
            className={`
            flex w-6 h-6 rounded-full items-center justify-center
            absolute top-0 ${
              theme === "DARK"
                ? "left-0 bg-zinc-400 text-zinc-600"
                : "right-0 bg-zinc-900 text-gray-400"
            }
          `}
          >
            {theme === "DARK" ? <Moon /> : <Sun />}
          </Switch.Thumb>
        </Switch.Root>
      </div>

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
