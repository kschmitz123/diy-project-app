import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { useState } from "react";
import { getProjectById } from "../utils/api";
import { useParams } from "react-router-dom";

const StyledContainer = styled(Container)`
  margin: 0 20px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 5px;
`;

export const DetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newProject = await getProjectById(projectId);
      setProject(newProject);
    }
    fetchData();
  }, [projectId]);

  return (
    <>
      <Header title={"Project Details"} />
      <StyledContainer>
        <ImagePreview
          src={project.data?.image}
          alt={project.data?.projectTitle}
        />
        <Title>{project.data?.projectTitle}</Title>
        <div>{project.data?.description}</div>
      </StyledContainer>

      <Navbar />
    </>
  );
};
