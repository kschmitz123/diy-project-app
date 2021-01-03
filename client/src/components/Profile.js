import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import PropTypes from "prop-types";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button } from "./Buttons";
import { useState } from "react";

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
  input {
    opacity: 0;
    position: absolute;
    height: 2.5rem;
    top: 0;
    left: 0;
    width: 44px;
  }
`;

const Profile = ({ user }) => {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setImageInput(event.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <Container>
      <h2>{user}</h2>
      <div>
        {previewSource ? (
          <img src={previewSource} alt="avatar" />
        ) : (
          <img src={Avatar} alt="avatar" />
        )}
        <Button>
          <input type="file" value={imageInput} onChange={handleImageChange} />

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
