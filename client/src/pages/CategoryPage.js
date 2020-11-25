import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  padding-top: 60px;
`;

export const CategoryPage = () => {
  return (
    <>
      <Header title={"Sewing Projects"} />
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
