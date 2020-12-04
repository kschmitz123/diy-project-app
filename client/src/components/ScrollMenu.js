import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getData } from "../utils/api";
import useAsync from "../utils/useAsync";

const Container = styled.div`
  padding-top: 10px;
  margin: 0 10px;
`;
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-height: 220px;
`;

const ImageContainer = styled.div`
  height: 190px;
  width: 190px;
  margin: 5px;

  img {
    border-radius: 25px;
    height: inherit;
    width: inherit;
  }
`;
const ScrollMenu = () => {
  const { data: project, loading, error, doFetch } = useAsync(getData);

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <Container>
      <h3>Latest</h3>
      {loading && <div>Loading...</div>}
      {error && <p>{error.message}</p>}
      <ScrollContainer>
        {project &&
          project.map((project) => (
            <Link key={project._id} to={`/projects/${project._id}`}>
              <ImageContainer>
                <img src={project.imageURL} alt={project.projectTitle} />
              </ImageContainer>
            </Link>
          ))}
      </ScrollContainer>
    </Container>
  );
};
export default ScrollMenu;
