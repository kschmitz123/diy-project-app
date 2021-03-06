import styled from "styled-components/macro";
import errorIcon from "../assets/shrug-emoticon.svg";
import PropTypes from "prop-types";

const Container = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const ErrorMessage = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <img src={errorIcon} alt="" />
    </Container>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  title: PropTypes.string,
};
