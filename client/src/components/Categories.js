import styled from "styled-components/macro";
import Sewing from "../assets/sewing-machine.svg";
import Macrame from "../assets/macrame.svg";
import Paint from "../assets/color-palette.svg";
import Woodwork from "../assets/woodworking.svg";
import Upcycling from "../assets/upcycling.svg";
import Crafts from "../assets/crafts.svg";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  height: 130px;
  width: 130px;
  margin: 5px;
  flex: 1 1 auto;
  border-radius: 25px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  border: 2px solid var(--main-color);

  img {
    width: 60%;
    height: 60%;
  }
  p {
    color: var(--main-color);
    margin: 5px 0;
  }
`;

const Container = styled.div`
  margin: 0 10px;
  padding-bottom: 60px;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const categories = [
  { link: "category/sewing", src: Sewing, alt: "Sewing", title: "Sewing" },
  {
    link: "category/macrame",
    src: Macrame,
    alt: "Macrame",
    title: "Macrame",
  },
  {
    link: "category/paint",
    src: Paint,
    alt: "Paint",
    title: "Paint",
  },
  {
    link: "category/woodwork",
    src: Woodwork,
    alt: "Woodword",
    title: "Woodwork",
  },
  {
    link: "category/upcycling",
    src: Upcycling,
    alt: "Upcycling",
    title: "Upcycling",
  },
  {
    link: "category/crafts",
    src: Crafts,
    alt: "Crafts",
    title: "Crafts",
  },
];
const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <div>
        {categories.map((category) => (
          <NavLink key={category.title} to={category.link}>
            <img src={category.src} alt={category.alt} />
            <p>{category.title}</p>
          </NavLink>
        ))}
      </div>
    </Container>
  );
};
export default Categories;
