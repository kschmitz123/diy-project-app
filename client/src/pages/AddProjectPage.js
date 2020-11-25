import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";

const Container = styled.div`
  padding: 60px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AddProjectPage = () => {
  return (
    <>
      <Header title={"Add a Project"} />
      <Container>
        <ButtonContainer>
          <Button>Select Image</Button>
          <Button>Upload Image</Button>
        </ButtonContainer>
        <Input />
      </Container>
      <Navbar />
    </>
  );
};
