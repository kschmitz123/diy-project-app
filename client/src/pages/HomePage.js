import Categories from "../components/Categories";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollMenu from "../components/ScrollMenu";
import { useAuthState } from "../utils/contexts/context";
import styled from "styled-components/macro";

const Greeting = styled.h2`
  text-align: center;
  padding-top: 40px;
`;
export const HomePage = () => {
  const username = useAuthState();
  return (
    <>
      <Header title={"Craftified"} />
      <div className="box">
        <Greeting>Welcome {username.userName}!</Greeting>
        <ScrollMenu />
        <Categories />
      </div>
      <Navbar />
    </>
  );
};
