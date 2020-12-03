import styled from "styled-components/macro";
import PropTypes from "prop-types";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 5px 5px;
`;
const Image = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
`;
export const FaveIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: var(--button-color);
  cursor: pointer;
`;

export const ImagePreview = ({ src, alt, children }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
      {children}
      {/* <FaveIcon>
        <FavoriteIcon fontSize="large" />
      </FaveIcon> */}
    </Container>
  );
};

ImagePreview.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
