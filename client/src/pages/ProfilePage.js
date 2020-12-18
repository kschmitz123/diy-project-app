import { Container } from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useUserState } from "../utils/contexts/context";
import { getSessionCookie } from "../utils/contexts/cookies";

export const ProfilePage = () => {
  const session = useUserState(getSessionCookie());

  return (
    <>
      <Header title={"Profile"} />
      <Container>
        Welcome <span>{session.user.username}</span>
      </Container>

      <Navbar />
    </>
  );
};
