import styled from "styled-components/macro";
import PropTypes from "prop-types";

const DialogContainer = styled.div`
  background-color: white;
  border: 3px solid var(--main-color);
  border-radius: 25px;
  padding: 20px;
  position: fixed;
  z-index: 10;
  top: 50%;
`;

const Popup = ({ children }) => {
  return (
    <DialogContainer>
      <h3>Do you really want to delete this project?</h3>
      {children}
    </DialogContainer>
  );
};
export default Popup;

Popup.propTypes = {
  children: PropTypes.node,
};
