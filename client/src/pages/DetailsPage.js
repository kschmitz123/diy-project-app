import { useEffect } from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { getProjectById } from "../utils/api";
import { useParams } from "react-router-dom";
import useAsync from "../utils/useAsync";

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
  const { data: project, loading, error, doFetch } = useAsync(() =>
    getProjectById(projectId)
  );

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <>
      <Header title={"Project Details"} />
      <StyledContainer>
        {loading && <div>Loading...</div>}
        {error && <p>{error.message}</p>}
        {project && (
          <>
            <ImagePreview
              src={project.data.imageURL}
              alt={project.data.projectTitle}
            />
            <Title>{project.data.projectTitle}</Title>
            <div>{project.data.description}</div>
          </>
        )}
      </StyledContainer>
      <Navbar />
    </>
  );
};
