import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 5px 5px;

  img {
    border-radius: 25px;
    width: 100%;
    height: 100%;
  }
`;

const ImagePreview = ({ src, alt, children }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      {children}
    </Container>
  );
};
export default ImagePreview;

ImagePreview.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
