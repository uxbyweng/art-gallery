// pages/gallery/index.js

import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces.js";
import Head from "next/head";

export default function ArtGallery({
  comments,
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <main>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <ListOfArtPieces
        pieces={artPieces}
        comments={comments}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
