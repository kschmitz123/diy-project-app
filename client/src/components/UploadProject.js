import { useState } from "react";
import { Button } from "./Button";
import {
  Form,
  LargeInput,
  SmallInput,
  Select,
  ImageInput,
} from "./InputElements";
import ImagePreview from "./ImagePreview";
import { useForm } from "react-hook-form";
import { postProject } from "../utils/api";
import { useHistory } from "react-router-dom";

export default function UploadProject() {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (data) => {
    const tags = data.tags.match(/[^,\s?]+/g);
    const material = data.material.match(/[^,\s?]+/g);
    const { projectTitle, description, category } = data;
    try {
      setLoading(true);
      const formattedData = {
        projectTitle: projectTitle,
        description: description,
        category: category,
        tags,
        material,
      };

      console.log(formattedData);
      if (!previewSource) return;
      const project = await postProject({
        formattedData: formattedData,
        image: previewSource,
      });
      console.log(formattedData);
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
          required
        />
        <SmallInput
          placeholder="Enter materials separated by comma"
          name="material"
          ref={register}
          required
        />
        <LargeInput ref={register} name="description" />
        <SmallInput
          placeholder="Enter tags separated by comma"
          ref={register}
          name="tags"
          required
        />
        <Select ref={register} name="category">
          <option value="">--Please choose a category--</option>
          <option value="sewing">Sewing</option>
          <option value="macrame">Macrame</option>
          <option value="woodwork">Woodwork</option>
          <option value="paint">Paint</option>
          <option value="crafts">Crafts</option>
          <option value="upcycling">Upcycling</option>
        </Select>

        <Button type="submit">Upload Project</Button>
      </Form>
      {errorMessage && { errorMessage }}
      {loading && <div>Loading...</div>}
    </>
  );
}
