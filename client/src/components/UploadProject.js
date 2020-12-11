import { useState } from "react";
import { Button } from "./Buttons";
import {
  Form,
  LargeInput,
  SmallInput,
  Select,
  ImageInput,
} from "./InputElements";
import ImagePreview from "./ImagePreview";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { createProject } from "../utils/createProject";
import { useUserState } from "../utils/contexts/context";

export default function UploadProject() {
  const [imageInput, setImageInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { user } = useUserState();
  const [mutate, { status }] = useMutation(createProject);

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
    const tags = data.tags.split(",");
    const material = data.material.split(",");
    const { projectTitle, description, category } = data;
    const formattedData = {
      projectTitle: projectTitle,
      description: description,
      category: category,
      tags,
      material,
    };
    try {
      const project = await mutate({ formattedData, previewSource, user });
      history.push(`/projects/${project}`);
    } catch (error) {
      console.error(error);
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
        <SmallInput
          placeholder="Enter materials separated by comma"
          name="material"
          ref={register}
        />
        <LargeInput ref={register} name="description" />
        <SmallInput
          placeholder="Enter tags separated by comma"
          ref={register}
          name="tags"
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
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>404 Error fetching projects</div>}
      </Form>
    </>
  );
}
