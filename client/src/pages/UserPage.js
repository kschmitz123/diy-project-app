import styled from "styled-components/macro";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  ErrorMessage,
  Header,
  Navbar,
  Profile,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { Ellipsis } from "react-spinners-css";

const ImageContainer = styled.div`
  max-width: 720px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    border-radius: 25px;
    margin: 5px;
    height: 150px;
    width: 150px;
  }
`;

export const UserPage = () => {
  const { user } = useParams();
  const { data, status } = useQuery(["users", user], getDataByParam);
  return (
    <>
      <Header title={"Profile"} />
      <Container>
        <Profile user={user} />
        <h3>Uploads by this user:</h3>
        {status === "loading" && <Ellipsis color="var(--main-color" />}
        {status === "error" && <div>404 Error fetching user</div>}
        {status === "success" && (
          <ImageContainer>
            {data && data.length > 0 ? (
              data.map((project) => (
                <Link key={project._id} to={`/projects/${project._id}`}>
                  <img src={project.imageURL} alt={project.projectTitle}></img>
                </Link>
              ))
            ) : (
              <ErrorMessage
                title={"Looks like you haven't uploaded any projects yet."}
              />
            )}
          </ImageContainer>
        )}
      </Container>
      <Navbar />
    </>
  );
};
