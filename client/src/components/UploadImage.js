import React, { useState } from "react";
import { Button } from "./Button";
import styled from "styled-components/macro";
import { ImageInput } from "./Input";
import { ImagePreview } from "./ImagePreview";

export default function UploadImage() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Image successfully uploaded.");
      setImageInput("");
      setPreviewSource("");
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    }
  };
  return (
    <>
      <ButtonContainer>
        <form onSubmit={handleSubmit}>
          <ImageInput value={imageInput} onChange={handleImageChange} />
          <Button type="submit">Upload Image</Button>
        </form>
      </ButtonContainer>
      {previewSource && <ImagePreview src={previewSource} alt="" />}
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
