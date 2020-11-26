import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  height: 50px;
  width: 100%;
  background: var(--main-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const NavLink = styled(Link)`
  background: none;
  border: none;
  color: var(--button-color);
`;
export const Navbar = () => {
  return (
    <Footer>
      <NavLink to="/">
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink to="/favourites">
        <FavoriteIcon fontSize="large" />
      </NavLink>
      <NavLink to="/add">
        <AddIcon fontSize="large" />
      </NavLink>
    </Footer>
  );
};
