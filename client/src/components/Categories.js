import React from "react";
import styled from "styled-components/macro";
import Sewing from "../assets/sewing-machine.svg";
import Macrame from "../assets/macrame.svg";
import Paint from "../assets/color-palette.svg";
import Woodwork from "../assets/woodworking.svg";

const CategoryButton = styled.button`
  height: 130px;
  width: 130px;
  margin: 5px;
  flex: 1 1 auto;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom right, #778195, #2c457e);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
`;
const ImageText = styled.p`
  color: var(--button-color);
  margin: 5px 0;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Categories = () => {
  return (
    <>
      <h3>Categories</h3>
      <Container>
        <CategoryButton>
          <Image src={Sewing} alt="Sewing" />
          <ImageText>Sewing</ImageText>
        </CategoryButton>
        <CategoryButton>
          <Image src={Macrame} alt="Macrame" />
          <ImageText>Macrame</ImageText>
        </CategoryButton>
        <CategoryButton>
          <Image src={Paint} alt="Paint" />
          <ImageText>Paint</ImageText>
        </CategoryButton>
        <CategoryButton>
          <Image src={Woodwork} alt="Woodwork" />
          <ImageText>Woodwork</ImageText>
        </CategoryButton>
      </Container>
    </>
  );
};
