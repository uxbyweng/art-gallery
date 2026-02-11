import useSWR from "swr";
import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces";
import Head from "next/head";
import styled from "styled-components";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // Fhlermeldung
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}

export default function FavoritesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritedPieces = artPieces.filter((artPiece) => {
    const info = artPiecesInfo.find((info) => info.slug === artPiece.slug);
    if (info && info.isFavorite) {
      return true;
    }
    return false;
  });

  return (
    <>
      <h1>My Favorites</h1>
      <ListOfArtPieces
        pieces={favoritedPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

const FavoritesContainer = styled.main``;
const Heading = styled.h1``;
