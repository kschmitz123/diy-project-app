import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  background: var(--main-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;

  h2 {
    margin: 0;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 8px;
  right: 10px;
  ${(props) =>
    props.active
      ? `
  color: #000`
      : `color: #fff`}
`;

const ExitButton = styled.button`
  background: none;
  border: none;
`;
const Header = ({ title }) => {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <StyledHeader>
      <ExitButton>
        <ExitToAppIcon />
      </ExitButton>
      <h2>{title}</h2>
      <Link to="/browse">
        <SearchButton active={location.pathname === "/browse"}>
          <SearchIcon fontSize="large" />
        </SearchButton>
      </Link>
    </StyledHeader>
  );
};
export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
