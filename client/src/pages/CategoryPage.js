import {
  ImagePreview,
  Container,
  TitlePreview,
  Header,
  Navbar,
  ErrorMessage,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { useQuery } from "react-query";
import { Link, useParams, useHistory } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import { BackButton } from "../components/Buttons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const CategoryPage = () => {
  const { category } = useParams();
  const history = useHistory();
  const { data: project, status } = useQuery(
    ["categories", category],
    getDataByParam
  );

  return (
    <>
      <Header title={"Browse Categories"}>
        <BackButton onClick={() => history.goBack()}>
          <ArrowBackIcon fontSize="large" />
        </BackButton>
      </Header>
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
