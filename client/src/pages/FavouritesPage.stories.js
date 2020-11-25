import React from "react";

import { FavouritesPage } from "./FavouritesPage";

export default {
  title: "Pages/FavouritesPage",
  component: FavouritesPage,
};

export const Standard = (args) => <FavouritesPage {...args} />;
