import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: rgb(50, 50, 50);
  position: sticky;
  bottom: 0px;
  z-index: 3;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  flex: 0 0 33%;
  background: #ff0000;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  color: #fff;
`;

export default function Navigation() {
  return (
    <Nav aria-label="Main navigation">
      <List>
        <ListItem>
          <StyledLink href="/" aria-label="Go to Spotlight page">
            Spotlight
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/gallery/" aria-label="Go to Art Pieces gallery">
            Art Pieces
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/favorites/" aria-label="Go to Favorites page">
            Favorites
          </StyledLink>
        </ListItem>
      </List>
    </Nav>
  );
}
