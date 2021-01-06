import styled from "styled-components/macro";
import PropTypes from "prop-types";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const DialogContainer = styled.div`
  background-color: white;
  border: 3px solid var(--main-color);
  border-radius: 25px;
  padding: 20px;
  position: relative;
  z-index: 999;
  display: grid;
  place-items: center;
  margin: 0 10px;
`;

const Popup = ({ children }) => {
  return (
    <PopupContainer>
      <DialogContainer>{children}</DialogContainer>
    </PopupContainer>
  );
};
export default Popup;

Popup.propTypes = {
  children: PropTypes.node,
};
