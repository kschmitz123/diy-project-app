import React from "react";
import styled from "styled-components/macro";
import { Button } from "../components/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallInput = styled.input`
  margin: 10px 0;
  height: 2rem;
  border-radius: 25px;
  width: 80%;
  border: solid 1px var(--secondary-font-color);
  text-align: center;
`;

const LargeInput = styled.textarea`
  height: 20rem;
  border-radius: 15px;
  width: 80%;
  border: solid 1px var(--secondary-font-color);
`;

const Select = styled.select`
  height: 2rem;
  border-radius: 25px;
  margin-bottom: 10px;
`;
export const Input = () => {
  return (
    <Form action="submit">
      <SmallInput required type="text" placeholder="Enter project title" />
      <LargeInput
        maxLength="500"
        required
        type="text"
        placeholder="Enter project description (max 500 characters)"
      />
      <SmallInput required type="text" placeholder="Enter tags" />
      <Select required>
        <option value="">--Please choose a category--</option>
        <option value="sewing">Sewing</option>
        <option value="macrame">Macrame</option>
        <option value="woodwork">Woodwork</option>
        <option value="paint">Paint</option>
      </Select>
      <Button type="submit">Add project</Button>
    </Form>
  );
};

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

ImageInput.defaultProps = {
  type: "file",
};
