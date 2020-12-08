import styled from "styled-components/macro";

export const Button = styled.button`
  height: 2rem;
  width: 120px;
  border-radius: 25px;
  background: var(--main-color);
  border: none;
  cursor: pointer;
  color: var(--button-color);
  font-weight: bold;
`;

export const FaveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: var(--button-color);
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  align-self: flex-end;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: gray;
  border: none;
  border-radius: 25px;
  width: 150px;
  display: flex;
  align-items: center;
  &&:hover,
  :active {
    background-color: red;
  }
`;
