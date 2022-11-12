import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";

export interface FavoriteProps {
  url: string;
  thumb: string;
}

export function Favorite({ thumb, url }: FavoriteProps) {
  const username = url.split("/").pop();
  const { theme } = useTheme();

  return (
    <a href={url} className="inline-flex flex-col items-center gap-2">
      <Image
        alt=""
        src={thumb}
        width={40}
        height={40}
        className={`rounded-full border ${
          theme === "DARK" ? "border-gray-100" : "border-zinc-900"
        }`}
      />

      <span
        className={`${theme === "DARK" ? "text-white" : "text-black"} text-xs`}
      >
        @{decodeURI(String(username))}
      </span>
    </a>
  );
}
