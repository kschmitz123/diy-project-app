import styled from "styled-components/macro";
import Sewing from "../assets/sewing-machine.svg";
import Macrame from "../assets/macrame.svg";
import Paint from "../assets/color-palette.svg";
import Woodwork from "../assets/woodworking.svg";
import Upcycling from "../assets/upcycling.svg";
import Crafts from "../assets/crafts.svg";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
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
    color: #906d66;
    margin: 5px 0;
    font-weight: 700;

    ::first-letter {
      text-transform: uppercase;
    }
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
  { src: Sewing, title: "sewing" },
  {
    src: Macrame,
    title: "macrame",
  },
  {
    src: Paint,
    title: "paint",
  },
  {
    src: Woodwork,
    title: "woodwork",
  },
  {
    src: Upcycling,
    title: "upcycling",
  },
  {
    src: Crafts,
    title: "Crafts",
  },
];
const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <div>
        {categories.map((category) => (
          <StyledLink key={category.title} to={`category/${category.title}`}>
            <img src={category.src} alt={category.title} />
            <p>{category.title}</p>
          </StyledLink>
        ))}
      </div>
    </Container>
  );
};
export default Categories;
