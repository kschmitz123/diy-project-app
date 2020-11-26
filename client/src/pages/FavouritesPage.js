import React from "react";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

export const FavouritesPage = () => {
  return (
    <>
      <Header title={"Favourites"} />
      <Container>
        <Link to="/details">
          <ImagePreview />
        </Link>
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
      </Container>

      <Navbar />
    </>
  );
};
