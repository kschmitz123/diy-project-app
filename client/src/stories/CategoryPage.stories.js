import React from "react";

import { CategoryPage } from "../pages/CategoryPage";

export default {
  title: "Pages/CategoriesPage",
  component: CategoryPage,
};

export const Standard = (args) => <CategoryPage {...args} />;
