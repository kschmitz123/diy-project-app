import React from "react";

import { DetailsPage } from "./DetailsPage";

export default {
  title: "Pages/DetailsPage",
  component: DetailsPage,
};

export const Standard = (args) => <DetailsPage {...args} />;
