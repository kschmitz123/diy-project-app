import Searchbar from "../components/Searchbar";
import { getDataByParam } from "../utils/api/projects";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ImagePreview from "../components/ImagePreview";
import { Link } from "react-router-dom";
import TitlePreview from "../components/TitlePreview";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { Ellipsis } from "react-spinners-css";

export const BrowsePage = () => {
  const [tag, setTag] = useState("");
  const { data: project, status, refetch } = useQuery(
    ["browse", tag],
    getDataByParam,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (tag) {
      refetch();
    }
  }, [tag, refetch]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar value={tag} onChange={handleChange} />
        {status === "loading" && <Ellipsis color="var(--main-color" />}
        {status === "error" && <div>404 Error fetching proejcts</div>}
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
              <div>No projects for this tag.</div>
            )}
          </span>
        )}
      </Container>
      <Navbar />
    </>
  );
};
