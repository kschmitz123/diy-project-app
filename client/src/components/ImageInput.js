import styled from "styled-components/macro";

const ImageInput = styled.div`
  margin-bottom: 10px;
  height: 2.5rem;
  width: 130px;
  border-radius: 12px;
  background: var(--main-color);
  border: none;
  color: var(--button-color);
  font-weight: bold;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 1rem;
  input {
    opacity: 0;
    height: 2.5rem;
    position: absolute;
  }
`;
export default ImageInput;
