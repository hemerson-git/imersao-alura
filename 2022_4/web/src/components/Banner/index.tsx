import Image from "next/image";

interface BannerProps {
  bannerURL: string;
}

export function Banner({ bannerURL }: BannerProps) {
  return (
    <section>
      <Image
        width={1332}
        height={300}
        src={bannerURL}
        alt=""
        className="h-72 object-cover object-bottom"
      />
    </section>
  );
}
