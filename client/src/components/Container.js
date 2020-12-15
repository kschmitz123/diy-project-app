import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 60px 10px;
  min-width: 320px;
  max-width: 720px;
  margin: 0 auto;
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: rgba(252, 163, 17, 0.05);
  backdrop-filter: blur(2px);
  position: fixed;
  right: 0;
  display: grid;
  place-items: center;
`;
