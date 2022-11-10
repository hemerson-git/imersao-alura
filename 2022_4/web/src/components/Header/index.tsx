import Image from "next/image";

interface HeaderProps {
  githubUser: string;
  menuItems: string[];
}

export function Header({ githubUser, menuItems }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-red-500">
      <Image
        src={`https://github.com/${githubUser}.png`}
        alt="Hemerson Oliveira"
        width={80}
        height={80}
        className="rounded-full"
      />

      <nav>
        <ul className="flex flex-1 gap-2 justify-end font-bold">
          {menuItems?.map((menuItem, index) => (
            <li
              key={index}
              className="hover:underline hover:underline-offset-2"
            >
              <a href="">{menuItem}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
