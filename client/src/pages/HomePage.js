import {
  Categories,
  Header,
  Navbar,
  ScrollMenu,
} from "../utils/helpers/imports";
import { useUserState } from "../utils/contexts/context";
import { getSessionCookie } from "../utils/contexts/cookies";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { SearchButton } from "../components/Buttons";

const Greeting = styled.h2`
  text-align: center;
  padding-top: 70px;
  margin: 0;
  span {
    color: var(--main-color);
    margin: 0;
  }
`;
export const HomePage = () => {
  const session = useUserState(getSessionCookie());

  return (
    <>
      <Header title={"Craftified"}>
        <Link to="/browse">
          <SearchButton aria-label={"Search"}>
            <SearchIcon fontSize="large" />
          </SearchButton>
        </Link>
      </Header>
      <div className="box">
        <Greeting>
          Welcome <span>{session.user.username} </span>!
        </Greeting>
        <ScrollMenu />
        <Categories />
      </div>
      <Navbar />
    </>
  );
};
