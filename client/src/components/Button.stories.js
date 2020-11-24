import React from "react";
import { Buttons } from "./Button";

export default {
  title: "Component/Buttons",
  component: Buttons,
};

const Template = (args) => <Buttons {...args} />;

export const Select = Template.bind({});
Select.args = {
  title: "Select image",
};

export const Upload = Template.bind({});
Upload.args = {
  title: "Upload image",
};

export const Add = Template.bind({});
Add.args = {
  title: "Add project",
};
