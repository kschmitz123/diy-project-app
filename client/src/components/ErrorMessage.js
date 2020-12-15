import styled from "styled-components/macro";
import errorIcon from "../assets/shrug-emoticon.svg";

const Container = styled.div`
  text-align: center;
`;

export const ErrorMessage = () => {
  return (
    <Container>
      <h3>Seems like this project doesn&apos;t exist anymore.</h3>
      <img src={errorIcon} alt="" />
    </Container>
  );
};
