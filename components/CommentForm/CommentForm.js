// components/CommentForm/CommentForm.js

export default function CommentForm() {
  return (
    <form data-js="commentForm">
      {/* <form data-js={formId} onSubmit={handleSubmit}> */}
      <label htmlFor="comment">Add a comment</label>
      <input
        name="comment"
        id="comment"
        type="text"
        defaultValue=""
        maxLength="25"
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
