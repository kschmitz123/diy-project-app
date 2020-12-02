import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getData } from "../utils/api";
import useAsync from "../utils/useAsync";
import { limited } from "../utils/queries";

const Container = styled.div`
  padding-top: 60px;
  margin: 0 10px;
`;
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-height: 200px;
`;

const ImageContainer = styled.div`
  height: 190px;
  width: 190px;
  margin: 5px;
`;
const Image = styled.img`
  border-radius: 25px;
  height: inherit;
  width: inherit;
`;

export const ScrollMenu = () => {
  const { data, loading, error, doFetch } = useAsync(() => getData(limited));

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <Container>
      <h3>Latest</h3>
      {loading && <div>Loading...</div>}
      {error && <p>{error.message}</p>}
      <ScrollContainer>
        {data &&
          data.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ImageContainer>
                <Image
                  src={project.data.image}
                  alt={project.data.projectTitle}
                />
              </ImageContainer>
            </Link>
          ))}
      </ScrollContainer>
    </Container>
  );
};
