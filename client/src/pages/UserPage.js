// import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { Container, Header, Navbar, Profile } from "../utils/helpers/imports";

export const UserPage = () => {
  const { user } = useParams();
  console.log(user);
  return (
    <>
      <Header title={"Profile"} />
      <Container>
        <Profile user={user} />
      </Container>
      <Navbar />
    </>
  );
};
