import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";

export const FavouritesPage = () => {
  return (
    <Container>
      <Link to="/details">
        <ImagePreview />
      </Link>
      <ImagePreview />
      <ImagePreview />
      <ImagePreview />
    </Container>
  );
};
