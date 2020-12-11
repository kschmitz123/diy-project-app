import Searchbar from "../components/Searchbar";
import { getDataByParam } from "../utils/api/projects";
import { useState } from "react";
import { useQuery } from "react-query";
import ImagePreview from "../components/ImagePreview";
import { Link } from "react-router-dom";
import TitlePreview from "../components/TitlePreview";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export const BrowsePage = () => {
  const [tag, setTag] = useState("");
  const { data: project, status, refetch } = useQuery(
    ["browse", tag],
    getDataByParam,
    {
      enabled: false,
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setTag(event.target.tag.value);
    refetch();
  };
  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar name="tag" onSubmit={handleSubmit} />
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
