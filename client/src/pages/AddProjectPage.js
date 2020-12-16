import {
  Header,
  Navbar,
  UploadProject,
  Container,
} from "../utils/helpers/imports";

export const AddProjectPage = () => {
  return (
    <>
      <Header title={"Add a Project"} />
      <Container>
        <UploadProject />
      </Container>
      <Navbar />
    </>
  );
};
