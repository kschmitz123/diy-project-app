import { HomePage } from "../pages/HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

export const Standard = (args) => <HomePage {...args} />;
