import styled from "styled-components/macro";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import { getData, getProjectByTag } from "../utils/api";
import { useEffect, useState } from "react";
import useAsync from "../utils/useAsync";
import ImagePreview from "../components/ImagePreview";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FaveButton } from "../components/Button";

const Container = styled.div`
  padding: 100px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
              </ImagePreview>
            </Link>
          ))}
      </Container>

      <Navbar />
    </>
  );
};
