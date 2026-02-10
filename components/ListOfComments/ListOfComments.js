import styled from "styled-components";

/* Styling */
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  margin: 0;
`;

export default function ListOfComments({ slug }) {
  console.log("slug: ", slug);
  return (
    <List>
      <ListItem>There are no comments for the image ({slug}) yet.</ListItem>
    </List>
  );
}
