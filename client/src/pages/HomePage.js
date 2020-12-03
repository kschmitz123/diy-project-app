import Header from "../components/Header";
import Categories from "../components/Categories";
import ScrollMenu from "../components/ScrollMenu";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Header title={"Craftified"} />
      <ScrollMenu />
      <Categories />
      <Navbar />
    </>
  );
};
