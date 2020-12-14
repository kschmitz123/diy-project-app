import Categories from "../components/Categories";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollMenu from "../components/ScrollMenu";
import { useUserState } from "../utils/contexts/context";
import styled from "styled-components/macro";
import { getSessionCookie } from "../utils/contexts/cookies";

const Greeting = styled.h2`
  text-align: center;
  padding-top: 40px;
`;
export const HomePage = () => {
  const session = useUserState(getSessionCookie());
  return (
    <>
      <Header title={"Craftified"} />
      <div className="box">
        <Greeting>Welcome {session.user.username}!</Greeting>
        <ScrollMenu />
        <Categories />
      </div>
      <Navbar />
    </>
  );
};
