import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { getFavoritesByUser } from "../utils/api/users";
import { useUserState } from "../utils/contexts/context";
import TitlePreview from "../components/TitlePreview";

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
        {status === "error" && <div>404 Error fetching proejcts</div>}
        {status === "success" && (
          <span>
            {data.favorites ? (
              data.favorites.map((favorite) => (
                <Link key={favorite._id} to={`/projects/${favorite._id}`}>
                  <ImagePreview
                    src={favorite.imageURL}
                    alt={favorite.projectTitle}
                  >
                    <TitlePreview title={favorite.projectTitle} />
                  </ImagePreview>
                </Link>
              ))
            ) : (
              <div>Looks like you don&apos;t have any favorites yet.</div>
            )}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
