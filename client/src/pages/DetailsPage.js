import {
  ImagePreview,
  Container,
  Header,
  Navbar,
  Popup,
  FaveButton,
  DeleteButton,
  Button,
  ErrorMessage,
  ProjectDetails,
} from "../utils/helpers/imports";
import { deleteProjectById, getDataByParam } from "../utils/api/projects";
import { getFavoritesByUser, postFavorites } from "../utils/api/users";
import { useUserState } from "../utils/contexts/context";
import styled from "styled-components/macro";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MaterialContainer = styled.span`
  color: var(--button-color);
  border-radius: 15px;
  padding: 5px;
  margin-left: 2px;
  background-color: var(--main-color);
`;

export const DetailsPage = () => {
  const { projectId } = useParams();
  const { user } = useUserState();
  const history = useHistory();
  const [popup, setPopup] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { data: project, status } = useQuery(
    ["projects", projectId],
    getDataByParam
  );

  useEffect(() => {
    const isFavorite = async () => {
      const result = await getFavoritesByUser("favorites", user.username);
      const favorites = result.favorites.some(
        (favorite) => favorite.id === projectId
      );
      if (favorites === true) {
        setFavorite(true);
      }
      return favorites;
    };
    isFavorite();
  }, [projectId, user]);

  const handleClick = async () => {
    setFavorite(!favorite);
    const favoriteData = {
      favoriteURL: project.imageURL,
      favoriteID: projectId,
      favoriteTitle: project.projectTitle,
    };
    try {
      await postFavorites({ favoriteData, user });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = () => {
    setPopup(true);
  };

  const handleDelete = async (id) => {
    await deleteProjectById(id);
    history.push("/home");
  };
  return (
    <>
      <Header title={"Project Details"} />
      <StyledContainer>
        {status === "loading" && <Ellipsis color="var(--main-color" />}
        {status === "error" && (
          <ErrorMessage
            title={"Seems like this project doesn't exist anymore."}
          />
        )}
        {status === "success" && (
          <>
            {project && (
              <>
                <ImagePreview src={project.imageURL} alt={project.projectTitle}>
                  <FaveButton
                    style={favorite ? favoriteStyle : normalStyle}
                    onClick={handleClick}
                    aria-label={"Favorite"}
                  >
                    <FavoriteIcon fontSize="large" />
                  </FaveButton>
                </ImagePreview>
                <ProjectDetails
                  title={project.projectTitle}
                  description={project.description}
                  user={project.creator}
                  to={`/users/${project.creator}`}
                  materials={project.material.map((materials) => (
                    <MaterialContainer key={materials.index}>
                      {materials}
                    </MaterialContainer>
                  ))}
                />
              </>
            )}
            {user.username === project.creator ? (
              <DeleteButton onClick={() => handleDeleteClick()}>
                <DeleteIcon /> <span>Delete Project</span>
              </DeleteButton>
            ) : (
              <></>
            )}
            {popup && (
              <Popup>
                <Button onClick={() => handleDelete(project._id)}>Yes</Button>
                <Button onClick={() => setPopup(false)}>No</Button>
              </Popup>
            )}
          </>
        )}
      </StyledContainer>

      <Navbar />
    </>
  );
};

const favoriteStyle = {
  color: "var(--main-color)",
};
const normalStyle = {
  color: "white",
};
