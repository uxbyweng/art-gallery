// pages/gallery/[slug].js

import { useRouter } from "next/router";
import MetaHead from "@/components/MetaHead/MetaHead";
import ArtPieceCard from "@/components/ArtPieceCard/ArtPieceCard";
import CommentForm from "@/components/CommentForm/CommentForm";
import ListOfComments from "@/components/ListOfComments/ListOfComments";
import styled from "styled-components";

/* Styling */
const Card = styled.article`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  margin-top: 10px;
  padding: 12px;
`;

const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.2;
`;

export default function ArtPieceDetailPage({
  artPieces,
  handleAddComment,
  comments,
}) {
  const router = useRouter();
  const { slug } = router.query;

  /* Finde einzelnes Bild */
  const artPiece = artPieces.find(
    (singleArtPiece) => singleArtPiece.slug === slug
  );

  if (!artPiece) return <h1>Artwork not found</h1>;

  /* Bildgröße festlegen      */
  const imageWidth = 300;
  const imageHeight = 400;

  return (
    <>
      <MetaHead
        title="ArtPiece Title | Art Gallery"
        description="ArtPiece Title from Artist"
      />
      <main>
        <ArtPieceCard
          artPiece={artPiece}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
        <Card>
          <Title>Comments:</Title>
          <ListOfComments slug={slug} comments={comments} />
        </Card>
        <Card>
          <CommentForm onAddComment={handleAddComment} slug={slug} />
        </Card>
      </main>
    </>
  );
}
