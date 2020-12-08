import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const FavouritesPage = () => {
  return (
    <>
      <Header title={"Favourites"} />
      <Container>
        <Link to="/details">
          <ImagePreview />
        </Link>
      </Container>
      <Navbar />
    </>
  );
};
