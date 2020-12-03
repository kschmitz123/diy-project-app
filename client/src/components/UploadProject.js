import { useState } from "react";
import Button from "./Button";
import {
  Form,
  LargeInput,
  SmallInput,
  Select,
  ImageInput,
} from "./InputElements";
import { ImagePreview } from "./ImagePreview";
import { useForm } from "react-hook-form";
import { postProject } from "../utils/api";
import { useHistory } from "react-router-dom";

export default function UploadProject() {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);
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

  const onSubmit = async (data) => {
    const tags = data.tags.match(/[^,\s?]+/g);
    try {
      setLoading(true);
      const formattedData = {
        projectTitle: data.projectTitle,
        description: data.description,
        category: data.category,
        tags,
      };
      if (!previewSource) return;
      const project = await postProject({
        data: formattedData,
        image: previewSource,
      });
      setLoading(false);
      history.push(`/projects/${project}`);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
        <Select ref={register} name="category">
          <option value="">--Please choose a category--</option>
          <option value="sewing">Sewing</option>
          <option value="macrame">Macrame</option>
          <option value="woodwork">Woodwork</option>
          <option value="paint">Paint</option>
        </Select>

        <Button type="submit">Upload Project</Button>
      </Form>
      {errorMessage && { errorMessage }}
      {loading && <div>Loading...</div>}
    </>
  );
}
