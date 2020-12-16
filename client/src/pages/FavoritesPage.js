import {
  ImagePreview,
  Container,
  Header,
  Navbar,
  TitlePreview,
  ErrorMessage,
} from "../utils/helpers/imports";
import { getFavoritesByUser } from "../utils/api/users";
import { useUserState } from "../utils/contexts/context";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const FavoritesPage = () => {
  const { user } = useUserState();
  const { data, status } = useQuery(
    ["favorites", user.username],
    getFavoritesByUser
  );

  return (
    <>
      <Header title={"Favorites"} />
      <Container>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>404 Error fetching projects</div>}
        {status === "success" && (
          <span>
            {data.favorites && data.favorites.length > 0 ? (
              data.favorites.map((favorite) => (
                <Link key={favorite.id} to={`/projects/${favorite.id}`}>
                  <ImagePreview
                    src={favorite.imageURL}
                    alt={favorite.projectTitle}
                  >
                    <TitlePreview title={favorite.projectTitle} />
                  </ImagePreview>
                </Link>
              ))
            ) : (
              <ErrorMessage
                title={"Looks like you don't have any favorites yet."}
              />
            )}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
