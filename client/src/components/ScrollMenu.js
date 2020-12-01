import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getProjects } from "../utils/api";

const Container = styled.div`
  padding-top: 60px;
  margin: 0 10px;
`;
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-height: 200px;
`;

const ImageContainer = styled.div`
  height: 190px;
  width: 190px;
  margin: 5px;
`;
const Image = styled.img`
  border-radius: 25px;
  height: inherit;
  width: inherit;
`;

export const ScrollMenu = () => {
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    const loadProjects = async () => {
      const projects = await getProjects();
      setProjectDisplay(
        projects.map((project) => (
          <>
            <ImageContainer key={project.id}>
              <Image src={project.data.image} alt={project.data.projectTitle} />
            </ImageContainer>
          </>
        ))
      );
    };
    loadProjects();
  }, []);

  return (
    <Container>
      <h3>Latest</h3>
      <ScrollContainer>{projectDisplay}</ScrollContainer>
    </Container>
  );
};
