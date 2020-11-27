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
import { useForm } from "react-hook-form";

export default function UploadProject() {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data) => {
    const tags = data.tags.match(/[^,\s?]+/g);
    console.log(data, tags);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ImageInput
          name="image"
          value={imageInput}
          onChange={handleImageChange}
          ref={register}
        />
        {previewSource && <ImagePreview src={previewSource} alt="" />}
        <SmallInput
          placeholder="Enter project title"
          name="projectTitle"
          ref={register}
        />
        <LargeInput ref={register} name="description" />
        <SmallInput placeholder="Enter tags" ref={register} name="tags" />
        <SelectCategory ref={register} name="category" />
        <Button type="submit">Upload Project</Button>
      </Form>
    </>
  );
}
