import { AddProjectPage } from "../pages/AddProjectPage";
import { BrowsePage } from "../pages/BrowsePage";
import { CategoryPage } from "../pages/CategoryPage";
import { DetailsPage } from "../pages/DetailsPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { HomePage } from "../pages/HomePage";

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/category/:category",
    component: CategoryPage,
  },
  {
    path: "/browse",
    component: BrowsePage,
  },
  {
    path: "/projects/:projectId",
    component: DetailsPage,
  },
  {
    path: "/favorites",
    component: FavoritesPage,
  },
  {
    path: "/add",
    component: AddProjectPage,
  },
];
export default routes;
