// pages/gallery/index.js

import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces.js";
import Head from "next/head";

export default function Movies() {
  return (
    <>
      <Head>
        <title>Galley with List of Artworks</title>
      </Head>
      <h1>Gallery Page</h1>
      <h2>ListOfArtPieces</h2>
      <ListOfArtPieces />
    </>
  );
}
