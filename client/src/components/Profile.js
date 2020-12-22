import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import PropTypes from "prop-types";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }

  h2 {
    color: var(--main-color);
    margin: 0;
  }
`;

const Profile = ({ user }) => {
  return (
    <Container>
      <h2>{user}</h2>
      <img src={Avatar} alt="avatar" />
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.string,
};
