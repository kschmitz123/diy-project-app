import styled from "styled-components/macro";

const Input = styled.input`
  height: 2rem;
  border-radius: 25px;
  text-align: center;
  width: 70%;
  border: solid 1px var(--secondary-font-color);
  position: fixed;
  top: 60px;
  z-index: 1;
`;

export const Searchbar = () => {
  return <Input type="text" placeholder="🔍  Search tags" />;
};
