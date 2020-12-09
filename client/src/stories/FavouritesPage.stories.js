import { favoritesPage } from "../pages/favoritesPage";

export default {
  title: "Pages/favoritesPage",
  component: favoritesPage,
};

export const Standard = (args) => <favoritesPage {...args} />;
