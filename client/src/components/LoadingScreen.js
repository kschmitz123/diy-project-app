import React from "react";
import styled from "styled-components/macro";
import loadingAnimationSrc from "../assets/loading_animation.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: var(--main-color);
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;
export const LoadingScreen = () => {
  return (
    <Container>
      <Title>Craftified</Title>
      <img src={loadingAnimationSrc} alt="gif" />
    </Container>
  );
};
