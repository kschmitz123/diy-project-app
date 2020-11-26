import React from "react";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { ScrollMenu } from "../components/ScrollMenu";
import { Navbar } from "../components/Navbar";

// const SearchButton = styled.button`
//   background: none;
//   border: none;
//   color: var(--button-color);
//   cursor: pointer;
//   z-index: 2;
//   position: fixed;
//   top: 8px;
//   right: 10px;
// `;

export const HomePage = () => {
  return (
    <>
      <Header title={"Craftified"} />
      <ScrollMenu />
      <Categories />
      <Navbar />
    </>
  );
};
