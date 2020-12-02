import styled from "styled-components/macro";
import Sewing from "../assets/sewing-machine.svg";
import Macrame from "../assets/macrame.svg";
import Paint from "../assets/color-palette.svg";
import Woodwork from "../assets/woodworking.svg";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  height: 130px;
  width: 130px;
  margin: 5px;
  flex: 1 1 auto;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom right, #778195, #2c457e);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
`;
const ImageText = styled.p`
  color: var(--button-color);
  margin: 5px 0;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin: 0 10px;
  padding-bottom: 60px;
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
    alt: "Woodwor",
    title: "Woodwork",
  },
];

export const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <CategoryContainer>
        {categories.map((category) => (
          <NavLink key={category.title} to={category.link}>
            <Image src={category.src} alt={category.alt} />
            <ImageText>{category.title}</ImageText>
          </NavLink>
        ))}
      </CategoryContainer>
    </Container>
  );
};
