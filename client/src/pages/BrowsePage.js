import Searchbar from "../components/Searchbar";
import { getData, getProjectByTag } from "../utils/api";
import { useEffect, useState } from "react";
import useAsync from "../utils/useAsync";
import ImagePreview from "../components/ImagePreview";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaveButton } from "../components/Button";
import TitlePreview from "../components/TitlePreview";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export const BrowsePage = () => {
  const [method, setMethod] = useState(getData);
  const { data: project, loading, error, doFetch } = useAsync(() => method);

  useEffect(() => {
    doFetch();
  }, [method]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMethod(getProjectByTag(event.target.tag.value));
  };
  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar name="tag" onSubmit={handleSubmit} />
        {loading && <div>Loading...</div>}
        {error && <p>{error.message}</p>}
        {project &&
          project.map((project) => (
            <Link key={project._id} to={`/projects/${project._id}`}>
              <ImagePreview src={project.imageURL} alt={project.projectTitle}>
                <FaveButton>
                  <FavoriteIcon fontSize="large" />
                </FaveButton>
                <TitlePreview title={project.projectTitle} />
              </ImagePreview>
            </Link>
          ))}
      </Container>
      <Navbar />
    </>
  );
};
