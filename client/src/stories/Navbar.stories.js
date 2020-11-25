import React from "react";
import { Navbar } from "../components/Navbar";

export default {
  title: "Component/Navbar",
  component: Navbar,
};

export const Standard = (args) => <Navbar {...args} />;
