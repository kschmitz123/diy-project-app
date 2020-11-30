import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

export const CategoryPage = () => {
  return (
    <>
      <Header title={"Sewing Projects"} />
      <Container>
        <Link to="/details">
          <ImagePreview />
        </Link>
        <ImagePreview />
        <ImagePreview />
        <ImagePreview />
      </Container>

      <Navbar />
    </>
  );
};
