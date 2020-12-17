import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";

const Footer = styled.footer`
  height: 55px;
  width: 100%;
  background: var(--secondary-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 20;
`;

const NavLink = styled(Link)`
  background: none;
  border: none;
  ${(props) =>
    props.active
      ? `
  color: #000`
      : `color: #fff`}
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Footer>
      <NavLink
        aria-label={"Home"}
        to={"/home"}
        active={location.pathname === "/home"}
      >
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink
        aria-label={"Favorites"}
        to={"/favorites"}
        active={location.pathname === "/favorites"}
      >
        <FavoriteIcon fontSize="large" />
      </NavLink>
      <NavLink
        aria-label={"Add project"}
        to={"/add"}
        active={location.pathname === "/add"}
      >
        <AddIcon fontSize="large" />
      </NavLink>
    </Footer>
  );
};
export default Navbar;
