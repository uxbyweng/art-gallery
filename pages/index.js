// pages/index.js
import Spotlight from "@/components/Spotlight";
import getRandomElement from "@/utils/getRandomElement";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage({ artPiecesInfo, onToggleFavorite }) {
  const {
    data: artPieces = [],
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <p>Error loading artworks</p>;
  if (isLoading || artPieces.length === 0)
    return <p>Loading...Please wait...</p>;
  const spotlightPiece = getRandomElement(artPieces);
  if (!spotlightPiece) {
    return <p>Loading Spotlight... Please Wait...</p>;
  }
  return (
    <main>
      <h1>Spotlight</h1>
      <Spotlight
        artist={spotlightPiece.artist}
        imageSource={spotlightPiece.imageSource}
        width={spotlightPiece.dimensions.width}
        height={spotlightPiece.dimensions.height}
        slug={spotlightPiece.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
