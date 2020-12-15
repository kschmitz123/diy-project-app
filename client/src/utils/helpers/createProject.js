import { postProject } from "../api/projects";

export const createProject = ({ formattedData, previewSource, user }) => {
  const project = postProject({
    formattedData: formattedData,
    image: previewSource,
    creator: user.username,
  });
  return project;
};
