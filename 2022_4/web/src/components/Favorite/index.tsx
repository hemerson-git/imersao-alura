import Image from "next/image";

export interface FavoriteProps {
  url: string;
  thumb: string;
}

export function Favorite({ thumb, url }: FavoriteProps) {
  const username = url.split("/").pop();

  return (
    <a href={url} className="inline-flex flex-col items-center gap-2">
      <Image
        alt=""
        src={thumb}
        width={40}
        height={40}
        className="rounded-full border border-gray-100"
      />

      <span className="text-white text-xs">@{decodeURI(String(username))}</span>
    </a>
  );
}
