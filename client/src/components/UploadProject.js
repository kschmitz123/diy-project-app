import React, { useState } from "react";
import { Button } from "./Button";
import {
  Form,
  LargeInput,
  SmallInput,
  SelectCategory,
  ImageInput,
} from "./InputElements";
import { ImagePreview } from "./ImagePreview";

export default function UploadProject() {
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
      <Form onSubmit={handleSubmit}>
        <ImageInput value={imageInput} onChange={handleImageChange} />
        {previewSource && <ImagePreview src={previewSource} alt="" />}
        <SmallInput placeholder="Enter project title" />
        <LargeInput />
        <SmallInput placeholder="Enter tags" />
        <SelectCategory />
        <Button>Upload Project</Button>
      </Form>
    </>
  );
}
