import { AddProjectPage } from "../pages/AddProjectPage";
import { BrowsePage } from "../pages/BrowsePage";
import { CategoryPage } from "../pages/CategoryPage";
import { DetailsPage } from "../pages/DetailsPage";
import { FavouritesPage } from "../pages/FavouritesPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
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
    path: "/favourites",
    component: FavouritesPage,
  },
  {
    path: "/add",
    component: AddProjectPage,
  },
];
export default routes;
