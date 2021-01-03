import styled from "styled-components/macro";
import Avatar from "../assets/avatar-placeholder.jpeg";
import PropTypes from "prop-types";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { Button, ConfirmButton, DismissButton } from "./Buttons";
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
          <>
            <img src={previewSource} alt="avatar" />
            <ConfirmButton>
              <CheckIcon />
            </ConfirmButton>
            <DismissButton>
              <ClearIcon />
            </DismissButton>
          </>
        ) : (
          <>
            <img src={Avatar} alt="avatar" />
            <UploadButton>
              <input
                type="file"
                value={imageInput}
                onChange={handleImageChange}
              />

              <AddAPhotoIcon />
            </UploadButton>
          </>
        )}
      </div>
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.string,
};
