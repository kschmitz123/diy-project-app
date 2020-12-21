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
import { Link } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import useDebounce from "../utils/hooks/useDebounce";

export const BrowsePage = () => {
  const [tag, setTag] = useState("");
  const debouncedTag = useDebounce(tag, 500);
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

  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar value={tag} onChange={handleChange} />
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
