import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import { Navbar } from "../components/Navbar";
import { getProjects } from "../utils/api";
import { useEffect } from "react";
import useAsync from "../utils/useAsync";
import { ImagePreview } from "../components/ImagePreview";

const Container = styled.div`
  padding: 100px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrowsePage = () => {
  const { data, loading, error, doFetch } = useAsync(() => getProjects());

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar />
        {loading && <div>Loading...</div>}
        {error && <p>{error.message}</p>}
        {data &&
          data.map((project) => (
            <ImagePreview
              key={project.id}
              src={project.data.image}
              alt={project.data.projectTitle}
            />
          ))}
      </Container>

      <Navbar />
    </>
  );
};
