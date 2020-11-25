import React from "react";

import { BrowsePage } from "./BrowsePage";

export default {
  title: "Pages/BrowsePage",
  component: BrowsePage,
};

export const Standard = (args) => <BrowsePage {...args} />;
