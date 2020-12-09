import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { getUserByParam } from "../utils/api/users";
import { useUserState } from "../utils/contexts/context";

export const FavoritesPage = () => {
  const { user } = useUserState();
  const { data: userdata } = useQuery(["users", user.username], getUserByParam);

  console.log(userdata);
  return (
    <>
      <Header title={"Favorites"} />
      <Container>
        <Link to="/details">
          <ImagePreview />
        </Link>
      </Container>
      <Navbar />
    </>
  );
};
