import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

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
  a {
    background: none;
    border: none;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Footer>
      <NavLink aria-label="Home" to="/home" activeStyle={{ color: "#000" }}>
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink
        aria-label="Favorites"
        to="/favorites"
        activeStyle={{ color: "#000" }}
      >
        <FavoriteIcon fontSize="large" />
      </NavLink>
      <NavLink
        aria-label="Add project"
        to="/add"
        activeStyle={{ color: "#000" }}
      >
        <AddIcon fontSize="large" />
      </NavLink>
      <NavLink
        aria-label="Profile"
        to="/profile"
        activeStyle={{ color: "#000" }}
      >
        <PersonIcon fontSize="large" />
      </NavLink>
    </Footer>
  );
};
export default Navbar;
