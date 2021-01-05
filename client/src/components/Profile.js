import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import PropTypes from "prop-types";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button } from "./Buttons";
import { useState } from "react";
import { postProfileImage } from "../utils/api/users";
import { Popup } from "../utils/helpers/imports";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: var(--main-color);
    margin: 0;
  }

  div:first-of-type {
    position: relative;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
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

const UploadButton = styled(Button)`
  position: absolute;
  top: 120px;
  right: 0;
  margin: 0;
  padding: 5px 10px;
  border-radius: 25px;
`;

const Profile = ({ user }) => {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

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
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await postProfileImage({ image: previewSource, user: user });
      setPopup(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDismiss = () => {
    setPopup(false);
    setImageInput("");
    setPreviewSource("");
  };

  const handleClick = () => {
    setPopup(true);
  };
  return (
    <Container>
      <h2>{user}</h2>
      <div>
        {previewSource ? (
          <>
            <img src={previewSource} alt="avatar" />
            <UploadButton>
              <input
                type="file"
                value={imageInput}
                onChange={handleImageChange}
                onClick={handleClick}
              />
              <AddAPhotoIcon />
            </UploadButton>
          </>
        ) : (
          <>
            <img src={Avatar} alt="avatar" />
            <UploadButton>
              <input
                type="file"
                value={imageInput}
                onChange={handleImageChange}
                onClick={handleClick}
              />
              <AddAPhotoIcon />
            </UploadButton>
          </>
        )}
      </div>
      {popup && (
        <>
          {previewSource && (
            <Popup>
              <h3>Do you want to use this image as your profile picture?</h3>
              <img src={previewSource} alt="avatar" />
              <Button onClick={handleSubmit}>Yes</Button>
              {loading && <p>Loading...</p>}
              <Button onClick={handleDismiss}>No</Button>
            </Popup>
          )}
        </>
      )}
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.string,
};
