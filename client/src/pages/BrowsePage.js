import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import { Navbar } from "../components/Navbar";
import { ImagePreview } from "../components/ImagePreview";

const Container = styled.div`
  padding-top: 100px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrowsePage = () => {
  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar />
        <div>Placeholder for search results</div>
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
      </Container>

      <Navbar />
    </>
  );
};
