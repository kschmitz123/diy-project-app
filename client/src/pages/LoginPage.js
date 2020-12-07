import { SmallInput } from "../components/InputElements";
import { Container } from "../components/LoadingScreen";
import { Button } from "../components/Button";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { postUser } from "../utils/api/users";
import { useForm } from "react-hook-form";

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

  const onSubmit = async (data) => {
    await postUser(data);
    history.push("/home");
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
