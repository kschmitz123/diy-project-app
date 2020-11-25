import React from "react";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";

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
