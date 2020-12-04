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
