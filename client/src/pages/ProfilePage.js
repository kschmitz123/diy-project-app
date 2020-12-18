import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Navbar,
  ErrorMessage,
  ImagePreview,
  TitlePreview,
} from "../utils/helpers/imports";
import { getDataByParam } from "../utils/api/projects";
import { useUserState } from "../utils/contexts/context";
import { getSessionCookie } from "../utils/contexts/cookies";

export const ProfilePage = () => {
  const session = useUserState(getSessionCookie());
  const { user } = useUserState();
  const { data, status } = useQuery(["users", user.username], getDataByParam);
  return (
    <>
      <Header title={"Profile"} />
      <Container>
        Welcome <span>{session.user.username}</span>
        <h3>My uploads</h3>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>404 Error fetching projects</div>}
        {status === "success" && (
          <span>
            {data && data.length > 0 ? (
              data.map((project) => (
                <Link key={project.id} to={`/projects/${project.d}`}>
                  <ImagePreview
                    src={project.imageURL}
                    alt={project.projectTitle}
                  >
                    <TitlePreview title={project.projectTitle} />
                  </ImagePreview>
                </Link>
              ))
            ) : (
              <ErrorMessage
                title={"Looks like you haven't uploaded any projects yet."}
              />
            )}
          </span>
        )}
      </Container>

      <Navbar />
    </>
  );
};
