import styled from "styled-components/macro";
import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { deleteProjectById, getDataByParam } from "../utils/api/projects";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { Ellipsis } from "react-spinners-css";
import { useUserState } from "../utils/contexts/context";
import { FaveButton, DeleteButton } from "../components/Buttons";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useEffect, useState } from "react";
import { getFavoritesByUser, postFavorites } from "../utils/api/users";

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

  const handleDelete = async (id) => {
    await deleteProjectById(id);
    history.push("/home");
  };

  return (
    <>
      <Header title={"Project Details"} />
      {status === "loading" && <Ellipsis color="var(--main-color" />}
      {status === "error" && <div>404 Error fetching proejcts</div>}
      {status === "success" && (
        <StyledContainer>
          {project && (
            <>
              <ImagePreview src={project.imageURL} alt={project.projectTitle}>
                <FaveButton
                  style={favorite ? favoriteStyle : normalStyle}
                  onClick={handleClick}
                >
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

const favoriteStyle = {
  color: "var(--main-color)",
};
const normalStyle = {
  color: "white",
};
