import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Navbar,
  ErrorMessage,
  Profile,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { useUserState } from "../utils/contexts/context";
import styled from "styled-components/macro";
import { getSessionCookie } from "../utils/contexts/cookies";
import { ExitButton } from "../components/Buttons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";

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

export const ProfilePage = () => {
  const { user } = useUserState();
  const { data, status } = useQuery(["users", user.username], getDataByParam);
  const session = useUserState(getSessionCookie());
  const history = useHistory();
  const { logout } = useUserState();

  const handleClick = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      <Header title={"Profile"}>
        <ExitButton onClick={handleClick}>
          <ExitToAppIcon fontSize="large" />
        </ExitButton>
      </Header>
      <Container>
        <Profile user={session.user.username} />
        <h3>My uploads</h3>
        {status === "loading" && <div>Loading...</div>}
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
