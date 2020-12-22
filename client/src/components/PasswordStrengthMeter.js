import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { createPasswordLabel } from "../utils/helpers/createPasswordLabel";

const Container = styled.div`
  margin-top: 5px;
  meter {
    width: 70%;
    height: 1rem;
    display: block;
    margin: auto;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const PasswordStrengthMeter = ({ value }) => {
  return (
    <Container>
      <meter max="4" low="1" high="3" optimum="4" value={value} />
      <p>
        Password Strength: <strong> {createPasswordLabel(value)}</strong>
      </p>
    </Container>
  );
};

export default PasswordStrengthMeter;

PasswordStrengthMeter.propTypes = {
  value: PropTypes.number,
};
