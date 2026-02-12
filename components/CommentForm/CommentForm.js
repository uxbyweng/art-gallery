// components/CommentForm/CommentForm.js

import { uid } from "uid";
import styled from "styled-components";

/* Styling */
const Form = styled.form`
  color: var(--text-color);
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 5px;
`;
const Hint = styled.p`
  color: var(--text-color);
  font-size: 0.7rem;
  line-height: 1;
  padding: 0 5px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  color: var(--text-color);
  padding: 05px;
  width: 100%;
  background: #333;
  border: none;
  border-radius: 8px;
  padding: 5px;
  margin: 0 0 5px 0;
`;
const Button = styled.button`
  color: var(--text-color);
  min-width: 40px;
  min-height: 40px;
  background: #333;
  border: none;
  border-radius: 8px;
  padding: 5px;
`;

export default function CommentForm({ onAddComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Zeitstempel erzeugen
    const timeStamp = new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }).format(new Date());

    // Neuen Kommentar als object mit id, slug, comment und timestamp speichern
    const newCommentObject = {
      id: uid(16),
      slug: slug,
      comment: data.comment,
      timestamp: timeStamp,
    };
    // und an 'onAddComment" übergeben
    onAddComment(newCommentObject);

    event.target.reset(); // formular wieder in den Ausgangszustand zurück setzen
  }

  return (
    <Form data-js="commentForm" onSubmit={handleSubmit}>
      <Label htmlFor="comment">Add a comment:</Label>
      <Input
        name="comment"
        id="comment"
        type="text"
        defaultValue=""
        minLength="3"
        maxLength="45"
        required
        aria-describedby="comment-hint"
      />
      <Hint id="comment-hint">3–45 characters.</Hint>
      <Button type="submit" aria-label="Submit comment">
        Post comment
      </Button>
    </Form>
  );
}
