import styled from "styled-components/macro";
import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { deleteProjectById, getDataByParam } from "../utils/api/projects";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { useUserState } from "../utils/contexts/context";
import { FaveButton, DeleteButton } from "../components/Buttons";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useEffect, useState } from "react";
import { postFavorites } from "../utils/api/users";

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
  const history = useHistory();
  const [favoriteURL, setFavoriteURL] = useState("");
  const [favoriteID, setFavoriteID] = useState("");
  const [favoriteTitle, setFavoriteTitle] = useState("");
  const { data: project, status } = useQuery(
    ["projects", projectId],
    getDataByParam
  );

  useEffect(() => {
    if (project) {
      setFavoriteID(projectId);
      setFavoriteURL(project.imageURL);
      setFavoriteTitle(project.projectTitle);
    }
  }, [project, projectId]);

  const handleClick = async () => {
    const favoriteData = { favoriteURL, favoriteID, favoriteTitle };
    try {
      await postFavorites({ favoriteData, user });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    await deleteProjectById(id);
    history.push("/home");
  };

  return (
    <>
      <Header title={"Project Details"} />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>404 Error fetching proejcts</div>}
      {status === "success" && (
        <StyledContainer>
          {project && (
            <>
              <ImagePreview src={project.imageURL} alt={project.projectTitle}>
                <FaveButton onClick={handleClick}>
                  <FavoriteIcon fontSize="large" />
                </FaveButton>
              </ImagePreview>
              <Title>{project.projectTitle}</Title>
              <div>{project.description}</div>
            </>
          )}
          {user.username === project.creator ? (
            <DeleteButton onClick={() => handleDelete(project._id)}>
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
