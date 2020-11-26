import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { ScrollMenu } from "../components/ScrollMenu";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const SearchButton = styled.button`
  background: none;
  border: none;
  color: var(--button-color);
  cursor: pointer;
  z-index: 2;
  position: fixed;
  top: 8px;
  right: 10px;
`;

export const HomePage = () => {
  return (
    <>
      <Header title={"Craftified"} />
      <Link to="/browse">
        <SearchButton>
          <SearchIcon fontSize="large" />
        </SearchButton>
      </Link>
      <ScrollMenu />
      <Categories />
      <Navbar />
    </>
  );
};
