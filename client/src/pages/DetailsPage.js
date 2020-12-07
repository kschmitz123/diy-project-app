import styled from "styled-components/macro";
import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { getDataByParam } from "../utils/api";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";

const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 5px;
`;

export const DetailsPage = () => {
  const { projectId } = useParams();
  const { data: project, status } = useQuery(
    ["projects", projectId],
    getDataByParam
  );

  return (
    <>
      <Header title={"Project Details"} />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>404 Error fetching proejcts</div>}
      {status === "success" && (
        <Container>
          {project && (
            <>
              <ImagePreview src={project.imageURL} alt={project.projectTitle} />
              <Title>{project.projectTitle}</Title>
              <div>{project.description}</div>
            </>
          )}
        </Container>
      )}
      <Navbar />
    </>
  );
};
