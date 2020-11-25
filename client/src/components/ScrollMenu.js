import React from "react";
import styled from "styled-components/macro";
import Test from "../assets/test.jpg";

const Div = styled.div`
  padding-top: 60px;
  margin: 0 10px;
`;
const Scroll = styled.div`
  display: flex;
  overflow-x: auto;
  height: 160px;
`;

const Container = styled.div`
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
    <Div>
      <h3>Latest</h3>
      <Scroll>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
        <Container>
          <Image src={Test} />
        </Container>
      </Scroll>
    </Div>
  );
};
