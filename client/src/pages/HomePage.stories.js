import React from "react";

import { HomePage } from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

export const Standard = (args) => <HomePage {...args} />;
