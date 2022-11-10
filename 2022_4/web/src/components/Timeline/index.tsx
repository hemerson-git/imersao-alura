import Image from "next/image";

interface PlaylistParams {
  title: string;
  url: string;
  thumb: string;
}

export interface TimelineProps {
  category: string;
  playlists: PlaylistParams[];
}

export function Timeline({ playlists, category }: TimelineProps) {
  return (
    <div>
      <ul className="px-4">
        {playlists.map((video, index) => (
          <li className="text-white" key={index}>
            <a href={video.url}>
              {video.title}

              <Image
                src={video.thumb}
                alt={video.title}
                height={40}
                width={240}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
