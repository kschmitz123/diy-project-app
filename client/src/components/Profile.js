import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import PropTypes from "prop-types";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button } from "./Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: var(--main-color);
    margin: 0;
  }

  div {
    position: relative;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    top: 120px;
    right: 0;
    margin: 0;
    padding: 5px 10px;
    border-radius: 25px;
  }
`;

const Profile = ({ user }) => {
  return (
    <Container>
      <h2>{user}</h2>
      <div>
        <img src={Avatar} alt="avatar" />
        <Button>
          <AddAPhotoIcon />
        </Button>
      </div>
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.string,
};
