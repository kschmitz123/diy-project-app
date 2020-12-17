import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: var(--main-color);
  color: var(--main-font-color);
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: inherit;
  border-radius: 0 0 25px 25px;
  margin: 0;
`;

const TitlePreview = ({ title }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};
export default TitlePreview;

TitlePreview.propTypes = {
  title: PropTypes.string,
};
