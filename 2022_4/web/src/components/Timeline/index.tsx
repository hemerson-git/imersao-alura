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
    <div className="flex flex-col w-full overflow-hidden mb-6 text-gray-100">
      <h2 className="mb-4 capitalize font-bold">{category}</h2>

      <ul
        className="
        grid gap-4 grid-columns-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-fr overflow-x-scroll
        grid-flow-col auto-cols-[minmax(200px,_1fr)] snap-mandatory select-none scroll-hidden pb-4
      "
      >
        {playlists.map((video, index) => (
          <li className="snap-start" key={index}>
            <a href={video.url} className="hover:opacity-50 transition-opacity">
              <Image
                className="aspect-video object-cover "
                src={video.thumb}
                alt={video.title}
                height={40}
                width={240}
              />

              <span className="pt-2 block pr-6">{video.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
