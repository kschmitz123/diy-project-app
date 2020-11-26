import React from "react";
import styled from "styled-components/macro";
import Sewing from "../assets/sewing-machine.svg";
import Macrame from "../assets/macrame.svg";
import Paint from "../assets/color-palette.svg";
import Woodwork from "../assets/woodworking.svg";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
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
  text-decoration: none;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
`;
const ImageText = styled.p`
  color: var(--button-color);
  margin: 5px 0;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin: 0 10px;
  padding-bottom: 60px;
`;

export const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <CategoryContainer>
        <NavLink to="/category">
          <Image src={Sewing} alt="Sewing" />
          <ImageText>Sewing</ImageText>
        </NavLink>
        <NavLink to="/category">
          <Image src={Macrame} alt="Macrame" />
          <ImageText>Macrame</ImageText>
        </NavLink>
        <NavLink to="/category">
          <Image src={Paint} alt="Paint" />
          <ImageText>Paint</ImageText>
        </NavLink>
        <NavLink to="/category">
          <Image src={Woodwork} alt="Woodwork" />
          <ImageText>Woodwork</ImageText>
        </NavLink>
      </CategoryContainer>
    </Container>
  );
};
