import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getData } from "../utils/api/projects";
import { useQuery } from "react-query";
import { Ellipsis } from "react-spinners-css";

const Container = styled.div`
  margin: 0 10px;

  div {
    display: flex;
    overflow-x: auto;
    max-height: 220px;
  }
`;

const ImageContainer = styled.div`
  height: 190px;
  width: 190px;
  margin: 5px;

  img {
    border-radius: 25px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const ScrollMenu = () => {
  const { data: project, status } = useQuery("projects", getData);

  return (
    <Container>
      <h3>Latest</h3>
      {status === "loading" && <Ellipsis color="var(--main-color" />}
      {status === "error" && <div>404 Error fetching projects</div>}
      {status === "success" && (
        <div>
          {project &&
            project.map((project) => (
              <Link key={project._id} to={`/projects/${project._id}`}>
                <ImageContainer>
                  <img src={project.imageURL} alt={project.projectTitle} />
                </ImageContainer>
              </Link>
            ))}
        </div>
      )}
    </Container>
  );
};
export default ScrollMenu;
