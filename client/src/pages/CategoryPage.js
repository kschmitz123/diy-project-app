import ImagePreview from "../components/ImagePreview";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDataByParam } from "../utils/api";
import TitlePreview from "../components/TitlePreview";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const CategoryPage = () => {
  const { category } = useParams();
  const { data: project, status } = useQuery(
    ["categories", category],
    getDataByParam
  );

  return (
    <>
      <Header title={"Browse Categories"} />
      <Container>
        <h3>{`Projects related to "${category}"`}</h3>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>404 Error fetching proejcts</div>}
        {status === "success" && (
          <span>
            {project &&
              project.map((project) => (
                <Link key={project._id} to={`/projects/${project._id}`}>
                  <ImagePreview
                    src={project.imageURL}
                    alt={project.projectTitle}
                  >
                    <TitlePreview title={project.projectTitle} />
                  </ImagePreview>
                </Link>
              ))}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
