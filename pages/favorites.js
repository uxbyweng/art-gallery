import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces";
import MetaHead from "@/components/MetaHead/MetaHead";

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

  // Favoriten Flag setzen
  let hasFavorites = false;
  if (favoritedPieces.length != 0) {
    hasFavorites = true;
  }

  return (
    <>
      <MetaHead
        title="Favorites | Art Gallery"
        description="Your saved artworks."
      />
      <main>
        <h1>My Favorites</h1>
        {!hasFavorites && <p>There are no favorites yet.</p>}
        <ListOfArtPieces
          pieces={favoritedPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </main>
    </>
  );
}
