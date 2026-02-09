// components/ListOfArtPieces/ListOfArtPieces.js
// import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fehler beim Laden der Gallery aus der API");
  }
  return response.json();
}

export default function ListOfArtPieces() {
  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <p>ListOfArtPieces</p>
      <ul>
        {artPieces.map((artPiece) => (
          <li key={artPiece.slug}>
            <p>Artist: {artPiece.artist}</p>
            <p>Name: {artPiece.name}</p>
            <p>Year: {artPiece.year}</p>
            <p>Genre: {artPiece.genre}</p>

            <p>Colors: {artPiece.colors.join(", ")}</p>

            <Link href={`/gallery/${artPiece.slug}`}>
              <Image
                src={artPiece.imageSource}
                width={artPiece.dimensions.width}
                height={artPiece.dimensions.height}
                alt={artPiece.name}
                style={{
                  width: artPiece.dimensions.width / 10,
                  height: "auto",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
