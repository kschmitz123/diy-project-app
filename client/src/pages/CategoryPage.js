import { Header } from "../components/Header";
import { ImagePreview } from "../components/ImagePreview";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category } = useParams();
  return (
    <>
      <Header title={"Browse Categories"} />
      <Container>
        <h3>{`Projects related to "${category}"`}</h3>
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
