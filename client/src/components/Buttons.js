import styled from "styled-components/macro";

export const Button = styled.button`
  padding: 10px;
  height: 2.5rem;
  border-radius: 12px;
  background: var(--main-color);
  border: none;
  cursor: pointer;
  color: var(--button-color);
  font-weight: bold;
  margin: 10px 5px 0;
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
  border-radius: 12px;
  display: flex;
  align-items: center;

  &&:hover,
  :active {
    background-color: red;
  }
`;
export const ExitButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SearchButton = styled(ExitButton)`
  z-index: 2;
  position: absolute;
  top: 8px;
  right: 10px;
  ${(props) =>
    props.active
      ? `
  color: #000`
      : `color: #fff`}
`;
