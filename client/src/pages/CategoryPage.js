import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAsync from "../utils/useAsync";
import { getCategory } from "../utils/api";
import TitlePreview from "../components/TitlePreview";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const CategoryPage = () => {
  const { category } = useParams();

  const { data: project, loading, error, doFetch } = useAsync(() =>
    getCategory(category)
  );

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <>
      <Header title={"Browse Categories"} />
      <Container>
        <h3>{`Projects related to "${category}"`}</h3>
        {loading && <div>Loading...</div>}
        {error && <p>{error.message}</p>}
        {project &&
          project.map((project) => (
            <Link key={project._id} to={`/projects/${project._id}`}>
              <ImagePreview src={project.imageURL} alt={project.projectTitle}>
                <TitlePreview title={project.projectTitle} />
              </ImagePreview>
            </Link>
          ))}
      </Container>
      <Navbar />
    </>
  );
};
