import { SearchButton, ExitButton } from "./Buttons";
import { useUserState } from "../utils/contexts/context";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link, useHistory, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  background: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 30;
  h2 {
    margin: 0;
    margin-right: 40px;
  }
`;

const Header = ({ title }) => {
  const location = useLocation();
  const history = useHistory();
  const { logout } = useUserState();

  const handleClick = () => {
    logout();
    history.push("/");
  };
  return (
    <StyledHeader>
      <ExitButton onClick={handleClick}>
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
