import Image from "next/image";

export default function Spotlight({ imageSource, artist }) {
  return (
    <section>
      <h2>{artist}</h2>
      <Image
        src={imageSource}
        alt={`spotlight: ${artist}`}
        width={500}
        height={500}
      />
    </section>
  );
}
