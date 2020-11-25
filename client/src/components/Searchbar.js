import React from "react";
import styled from "styled-components/macro";

const Input = styled.input`
  height: 2rem;
  border-radius: 25px;
  width: 70%;
  border: solid 1px var(--secondary-font-color);
`;

export const Searchbar = () => {
  return <Input type="text" placeholder="🔍 Search tags" />;
};
