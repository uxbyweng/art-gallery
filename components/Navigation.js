import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faImages, faHeart } from "@fortawesome/free-solid-svg-icons";

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
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: #fff;
  min-height: 44px;
`;

export default function Navigation() {
  return (
    <Nav aria-label="Main navigation">
      <List>
        <ListItem>
          <StyledLink href="/" aria-label="Go to Spotlight page">
            <FontAwesomeIcon icon={faBolt} aria-hidden="true" />
            <span>Spotlight</span>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/gallery/" aria-label="Go to Art Pieces gallery">
            <FontAwesomeIcon icon={faImages} aria-hidden="true" />
            <span>Art Pieces</span>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/favorites/" aria-label="Go to Favorites page">
            <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
            <span>Favorites</span>
          </StyledLink>
        </ListItem>
      </List>
    </Nav>
  );
}
