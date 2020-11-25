import React from "react";
import styled from "styled-components/macro";
import Test from "../assets/test.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 5px 5px;
`;
const Image = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
`;
const FaveIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: var(--button-color);
  cursor: pointer;
`;

export const ImagePreview = () => {
  return (
    <Container>
      <Image src={Test} alt="test" />
      <FaveIcon>
        <FavoriteIcon fontSize="large" />
      </FaveIcon>
    </Container>
  );
};
