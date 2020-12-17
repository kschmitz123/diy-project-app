import styled from "styled-components/macro";

export const ImageInput = styled.div`
  margin-bottom: 10px;
  height: 2rem;
  width: 120px;
  border-radius: 12px;
  background: var(--main-color);
  border: none;
  color: var(--button-color);
  font-weight: bold;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  input {
    opacity: 0;
    height: 2rem;
    width: 120px;
    position: absolute;
  }
`;
