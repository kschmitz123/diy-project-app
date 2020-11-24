import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const HeaderTop = styled.header`
  height: 50px;
  background: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

export const Header = ({ title }) => {
  return (
    <HeaderTop>
      <Title>{title}</Title>
    </HeaderTop>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
