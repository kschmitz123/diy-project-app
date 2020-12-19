import { AddProjectPage } from "../../pages/AddProjectPage";
import { BrowsePage } from "../../pages/BrowsePage";
import { CategoryPage } from "../../pages/CategoryPage";
import { DetailsPage } from "../../pages/DetailsPage";
import { FavoritesPage } from "../../pages/FavoritesPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { HomePage } from "../../pages/HomePage";
import { UserPage } from "../../pages/UserPage";

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
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/users/:user",
    component: UserPage,
  },
];
export default routes;
