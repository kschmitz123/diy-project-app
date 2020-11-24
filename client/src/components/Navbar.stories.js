import React from "react";
import { Navbar } from "./Navbar";

export default {
  title: "Component/Navbar",
  component: Navbar,
};

export const Standard = (args) => <Navbar {...args} />;
