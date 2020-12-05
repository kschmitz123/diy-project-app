import { postProject } from "../utils/api";

export const createProject = ({ formattedData, previewSource }) => {
  const project = postProject({
    formattedData: formattedData,
    image: previewSource,
  });
  return project;
};
