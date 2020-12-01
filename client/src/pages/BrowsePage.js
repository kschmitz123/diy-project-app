import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import { Navbar } from "../components/Navbar";
import { ImagePreview } from "../components/ImagePreview";
import { getProjects } from "../utils/api";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 100px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrowsePage = () => {
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    const loadProjects = async () => {
      const projects = await getProjects();
      setProjectDisplay(
        projects.map((project) => (
          <ImagePreview
            key={project.id}
            src={project.data.image}
            alt={project.data.projectTitle}
          />
        ))
      );
    };
    loadProjects();
  }, []);

  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar />
        <div>{projectDisplay}</div>
      </Container>

      <Navbar />
    </>
  );
};
