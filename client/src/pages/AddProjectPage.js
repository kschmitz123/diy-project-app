import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";
import UploadImage from "../utils/uploadImage";

const Container = styled.div`
  padding: 60px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const AddProjectPage = () => {
  return (
    <>
      <Header title={"Add a Project"} />

      <Container>
        <UploadImage />
        <Input />
      </Container>
      <Navbar />
    </>
  );
};
