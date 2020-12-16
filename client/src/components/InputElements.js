import styled from "styled-components/macro";

export const Form = styled.form`
  margin: 60px 0;
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

export const Select = styled.select`
  height: 2rem;
  border-radius: 25px;
  margin-bottom: 10px;
`;

SmallInput.defaultProps = {
  type: "text",
  required: true,
};

LargeInput.defaultProps = {
  maxLength: "1000",
  required: true,
  type: "text",
  placeholder: "Enter project description (max 1000 characters)",
};

Select.defaultProps = { required: true };
