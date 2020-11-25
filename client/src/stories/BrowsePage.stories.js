import React from "react";

import { BrowsePage } from "../pages/BrowsePage";

export default {
  title: "Pages/BrowsePage",
  component: BrowsePage,
};

export const Standard = (args) => <BrowsePage {...args} />;
