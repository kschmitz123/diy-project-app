import Categories from "../components/Categories";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ScrollMenu from "../components/ScrollMenu";

export const HomePage = () => {
  return (
    <>
      <Header title={"Craftified"} />
      <div className="box">
        <ScrollMenu />
        <Categories />
      </div>
      <Navbar />
    </>
  );
};
