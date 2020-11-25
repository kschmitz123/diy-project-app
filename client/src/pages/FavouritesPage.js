import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  padding: 60px 10px;
`;

export const FavouritesPage = () => {
  return (
    <>
      <Header title={"Favourites"} />
      <Container>
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
      </Container>

      <Navbar />
    </>
  );
};
