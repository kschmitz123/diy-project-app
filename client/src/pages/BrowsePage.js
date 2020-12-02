import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import { Navbar } from "../components/Navbar";
import { getData, getProjectByTag } from "../utils/api";
import { useEffect, useState } from "react";
import useAsync from "../utils/useAsync";
import { ImagePreview } from "../components/ImagePreview";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 100px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrowsePage = () => {
  const [method, setMethod] = useState(getData);
  const { data, loading, error, doFetch } = useAsync(() => method);
  const [tag, setTag] = useState("");

  useEffect(() => {
    doFetch();
  }, [method]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMethod(getProjectByTag(tag));
  };
  return (
    <>
      <Header title={"Browse Projects"} />
      <Container>
        <Searchbar
          onSubmit={handleSubmit}
          name="tag"
          value={tag}
          onChange={handleChange}
        />
        {loading && <div>Loading...</div>}
        {error && <p>{error.message}</p>}
        {data &&
          data.map((project) => (
            <Link key={project._id} to={`/projects/${project._id}`}>
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
