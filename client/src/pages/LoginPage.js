import { SmallInput } from "../components/InputElements";
import { Container } from "../components/LoadingScreen";
import { Button } from "../components/Button";
import styled from "styled-components/macro";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffdbac;
  border-radius: 25px;
  width: 60%;
  text-align: center;

  form {
    padding-bottom: 20px;
  }
`;

export const LoginPage = () => {
  return (
    <Container>
      <h1>Craftified</h1>
      <FormContainer>
        <h2>Login</h2>
        <form>
          <SmallInput placeholder="Enter username" />
          <SmallInput placeholder="Enter password" />
          <Button>Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};
