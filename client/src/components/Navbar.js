import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components/macro";

const Footer = styled.footer`
  height: 50px;
  background: var(--main-color);
  display: flex;
  justify-content: space-evenly;
`;

const Icons = styled.button`
  background: none;
  border: none;
  color: var(--button-color);
`;
export const Navbar = () => {
  return (
    <Footer>
      <Icons>
        <HomeIcon fontSize="large" />
      </Icons>
      <Icons>
        <FavoriteIcon fontSize="large" />
      </Icons>
      <Icons>
        <AddIcon fontSize="large" />
      </Icons>
    </Footer>
  );
};
