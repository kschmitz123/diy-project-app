import styled from "styled-components/macro";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  background: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 30;
  h2 {
    margin: 0;
  }
`;

const Header = ({ title, children }) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
      {children}
    </StyledHeader>
  );
};
export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
