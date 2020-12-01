import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import { Navbar } from "../components/Navbar";
import { getData } from "../utils/api";
import { useEffect } from "react";
import useAsync from "../utils/useAsync";
import { ImagePreview } from "../components/ImagePreview";
import { Link } from "react-router-dom";
import { all } from "../utils/queries";

const Container = styled.div`
  padding: 100px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrowsePage = () => {
  const { data, loading, error, doFetch } = useAsync(() => getData(all));

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
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ImagePreview
                src={project.data.image}
                alt={project.data.projectTitle}
              />
            </Link>
          ))}
      </Container>

      <Navbar />
    </>
  );
};
