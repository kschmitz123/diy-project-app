import {
  Searchbar,
  ImagePreview,
  TitlePreview,
  Header,
  Navbar,
  Container,
  ErrorMessage,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import useDebounce from "../utils/hooks/useDebounce";
import { BackButton } from "../components/Buttons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const BrowsePage = () => {
  const [tag, setTag] = useState("");
  const debouncedTag = useDebounce(tag, 500);
  const history = useHistory();
  const { data: project, status, refetch } = useQuery(
    ["browse", tag],
    getDataByParam,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (debouncedTag) {
      refetch();
    }
  }, [debouncedTag, refetch]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header title={"Browse Projects"}>
        <BackButton onClick={() => history.goBack()}>
          <ArrowBackIcon fontSize="large" />
        </BackButton>
      </Header>
      <Container>
        <Searchbar
          onSubmit={handleSubmit}
          value={tag}
          onChange={handleChange}
        />
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
              <ErrorMessage title={"There are no projects for this tag."} />
            )}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
