import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.button`
  height: 45px;
  width: 130px;
  border-radius: 25px;
  background: var(--main-color);
  border: none;
  cursor: pointer;
  color: var(--button-color);
  font-weight: bold;
`;

export const Buttons = ({ title }) => {
  return <Button>{title}</Button>;
};

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
};
