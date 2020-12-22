import { SmallInput, Button, Speechbubble } from "../utils/helpers/imports";
import { Container } from "../components/LoadingScreen";
import { setSessionCookie } from "../utils/contexts/cookies";
import { useUserState } from "../utils/contexts/context";
import { postUser } from "../utils/api/users";
import { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import zxcvbn from "zxcvbn";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #dac7c39c;
  border-radius: 25px;
  width: 70%;
  max-width: 720px;
  text-align: center;

  form {
    padding-bottom: 20px;
  }
`;

export const LoginPage = () => {
  const { login } = useUserState();
  const [error, setError] = useState(null);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState("");
  const result = zxcvbn(password);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (data) => {
    const trimmedUsername = data.username.trim();
    try {
      await postUser({ username: trimmedUsername, password: data.password });
      login(trimmedUsername);
      setSessionCookie(trimmedUsername);
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
            placeholder="Enter username"
            name="username"
            ref={register({ minLength: 5 })}
          />
          {errors.username && (
            <Speechbubble>
              Username must be at least 5 characters long.
            </Speechbubble>
          )}

          <SmallInput
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            name="password"
            ref={register}
          />
          {password && (
            <>
              <PasswordStrengthMeter value={result.score} />
            </>
          )}
          {error && <Speechbubble>{error.message}</Speechbubble>}
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};
