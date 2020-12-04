import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    text-align: center;
    height: 2rem;
    border-radius: 25px;
    width: 60%;
    max-width: 680px;
    border: solid 1px var(--secondary-font-color);
    position: fixed;
    top: 60px;
    z-index: 1;
  }
`;

const Searchbar = ({ value, onSubmit, onChange, name }) => {
  return (
    <Form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="🔍  Search tags"
        name={name}
      />
    </Form>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};
