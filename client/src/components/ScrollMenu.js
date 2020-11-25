import React from "react";
import styled from "styled-components/macro";
import Test from "../assets/test.jpg";

const Container = styled.div`
  padding-top: 60px;
  margin: 0 10px;
`;
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  height: 160px;
`;

const ImageContainer = styled.div`
  width: 190px;
  margin: 5px;
`;
const Image = styled.img`
  border-radius: 25px;
  height: inherit;
  width: inherit;
`;

export const ScrollMenu = () => {
  return (
    <Container>
      <h3>Latest</h3>
      <ScrollContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Test} />
        </ImageContainer>
      </ScrollContainer>
    </Container>
  );
};
