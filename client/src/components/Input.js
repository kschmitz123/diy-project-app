import React from "react";
import styled from "styled-components/macro";

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

const LargeInput = styled.input`
  height: 40rem;
  border-radius: 15px;
  width: 80%;
  border: solid 1px var(--secondary-font-color);
  text-align: center;
`;

const Select = styled.select`
  height: 2rem;
  border-radius: 25px;
`;
export const Input = () => {
  return (
    <Form action="submit">
      <SmallInput type="text" placeholder="Enter project title" />
      <LargeInput type="text" placeholder="Enter project description" />
      <SmallInput type="text" placeholder="Enter tags" />
      <Select required>
        <option value="">--Please choose a category--</option>
        <option value="sewing">Sewing</option>
        <option value="macrame">Macrame</option>
        <option value="woodwork">Woodwork</option>
        <option value="paint">Paint</option>
      </Select>
    </Form>
  );
};
