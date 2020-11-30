import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HeaderTop = styled.header`
  height: 50px;
  width: 100%;
  background: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: fixed;
  top: 8px;
  right: 10px;
  ${(props) =>
    props.active
      ? `
  color: #000`
      : `color: #fff`}
`;
const Title = styled.h2`
  margin: 0;
`;

export const Header = ({ title }) => {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <HeaderTop>
      <Title>{title}</Title>
      <Link to="/browse">
        <SearchButton active={location.pathname === "/browse"}>
          <SearchIcon fontSize="large" />
        </SearchButton>
      </Link>
    </HeaderTop>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};