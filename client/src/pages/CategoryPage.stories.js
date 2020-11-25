import React from "react";

import { CategoryPage } from "./CategoryPage";

export default {
  title: "Pages/CategoriesPage",
  component: CategoryPage,
};

export const Standard = (args) => <CategoryPage {...args} />;
