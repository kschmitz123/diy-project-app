import React from "react";

import { CategoryPage } from "./CategoryPage";

export default {
  title: "Pages/Page",
  component: CategoryPage,
};

export const Standard = (args) => <CategoryPage {...args} />;
