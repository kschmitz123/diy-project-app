import styled from "styled-components/macro";
import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { getDataByParam } from "../utils/api/projects";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { useUserState } from "../utils/contexts/context";
import { DeleteButton } from "../components/Buttons";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: 5px;
`;

export const DetailsPage = () => {
  const { projectId } = useParams();
  const { user } = useUserState();
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
        <StyledContainer>
          {project && (
            <>
              <ImagePreview src={project.imageURL} alt={project.projectTitle} />
              <Title>{project.projectTitle}</Title>
              <div>{project.description}</div>
            </>
          )}
          {user.name === project.creator ? (
            <DeleteButton>
              <DeleteIcon /> <span>Delete Project</span>
            </DeleteButton>
          ) : (
            <></>
          )}
        </StyledContainer>
      )}

      <Navbar />
    </>
  );
};
