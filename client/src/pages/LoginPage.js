import { SmallInput, Button } from "../utils/helpers/imports";
import { Container } from "../components/LoadingScreen";
import { setSessionCookie } from "../utils/contexts/cookies";
import { useUserState } from "../utils/contexts/context";
import { postUser } from "../utils/api/users";
import { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
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
  const { login } = useUserState();
  const [name, setName] = useState();
  const [error, setError] = useState(null);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      await postUser(data);
      login(name);
      setSessionCookie(name);
      history.push("/home");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  return (
    <Container>
      <h1>Craftified</h1>
      <FormContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SmallInput
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter username"
            name="username"
            ref={register}
          />
          <SmallInput
            placeholder="Enter password"
            type="password"
            name="password"
            ref={register({ pattern: /(?=.*\d)(?=.*[A-Z]).{6,20}/ })}
          />
          {error && <p>{error.message}</p>}
          {errors.password && (
            <p>
              Password must contain at least 6 characters, an upper case letter
              and a number.
            </p>
          )}
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};
