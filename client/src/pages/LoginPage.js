import { SmallInput } from "../components/InputElements";
import { Container } from "../components/LoadingScreen";
import { Button } from "../components/Button";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../contexts/loginUser";
import { useAuthDispatch } from "../contexts/context";

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
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const dispatch = useAuthDispatch();

  const onSubmit = async ({ username, password }) => {
    try {
      let response = await loginUser(dispatch, { username, password });
      if (!response.username) return;
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <h1>Craftified</h1>
      <FormContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SmallInput
            placeholder="Enter username"
            name="username"
            ref={register}
          />
          <SmallInput
            placeholder="Enter password"
            type="password"
            name="password"
            ref={register}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};
