import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = styled.footer`
  height: 50px;
  width: 100%;
  background: var(--main-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
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
  useEffect(() => {}, [location]);

  return (
    <Footer>
      <NavLink to={"/home"} active={location.pathname === "/home"}>
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink to={"/favourites"} active={location.pathname === "/favourites"}>
        <FavoriteIcon fontSize="large" />
      </NavLink>
      <NavLink to={"/add"} active={location.pathname === "/add"}>
        <AddIcon fontSize="large" />
      </NavLink>
    </Footer>
  );
};
export default Navbar;
