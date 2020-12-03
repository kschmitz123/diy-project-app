import styled from "styled-components/macro";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallInput = styled.input`
  margin: 10px 0;
  height: 2rem;
  border-radius: 25px;
  width: 80%;
  border: solid 1px var(--secondary-font-color);
  text-align: center;
`;

export const LargeInput = styled.textarea`
  height: 20rem;
  border-radius: 15px;
  width: 80%;
  border: solid 1px var(--secondary-font-color);
`;

export const ImageInput = styled.input`
  height: 2rem;
  width: 120px;
  border-radius: 25px;
  background: var(--main-color);
  border: none;
  cursor: pointer;
  color: var(--button-color);
  font-weight: bold;
`;

export const Select = styled.select`
  height: 2rem;
  border-radius: 25px;
  margin-bottom: 10px;
`;

ImageInput.defaultProps = {
  type: "file",
  required: true,
};

SmallInput.defaultProps = {
  type: "text",
};

LargeInput.defaultProps = {
  maxLength: "500",
  required: true,
  type: "text",
  placeholder: "Enter project description (max 500 characters)",
};

Select.defaultProps = { required: true };
