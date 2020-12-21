import styled from "styled-components/macro";

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallInput = styled.input`
  margin: 10px 0 0;
  height: 2.5rem;
  border-radius: 12px;
  width: 90%;
  border: solid 1px white;
  text-align: center;
  box-shadow: var(--main-box-shadow);
  &&::placeholder {
    font-size: 1rem;
  }
`;

export const LargeInput = styled.textarea`
  margin-top: 10px;
  height: 20rem;
  border-radius: 12px;
  width: 90%;
  border: solid 1px white;
  box-shadow: var(--main-box-shadow);
  text-align: center;
  resize: none;
  &&::placeholder {
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  height: 2rem;
  border-radius: 12px;
  margin: 10px 0;
  border: 2px solid var(--main-color);
  background: transparent;
  box-shadow: var(--main-box-shadow);
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
