import {
  ImagePreview,
  Container,
  TitlePreview,
  Header,
  Navbar,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import { ErrorMessage } from "../components/ErrorMessage";

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
        {status === "loading" && <Ellipsis color="var(--main-color" />}
        {status === "error" && <div>404 Error fetching projects</div>}
        {status === "success" && (
          <span>
            {project && project.length > 0 ? (
              project.map((project) => (
                <Link key={project._id} to={`/projects/${project._id}`}>
                  <ImagePreview
                    src={project.imageURL}
                    alt={project.projectTitle}
                  >
                    <TitlePreview title={project.projectTitle} />
                  </ImagePreview>
                </Link>
              ))
            ) : (
              <ErrorMessage
                title={
                  "Seems like there are no projects for this category yet."
                }
              />
            )}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
