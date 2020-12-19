import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import { useUserState } from "../utils/contexts/context";
import { getSessionCookie } from "../utils/contexts/cookies";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }

  h2 {
    color: var(--main-color);
    margin: 0;
  }
`;

export const Profile = () => {
  const session = useUserState(getSessionCookie());
  return (
    <Container>
      <h2>{session.user.username}</h2>
      <img src={Avatar} alt="avatar" />
    </Container>
  );
};
