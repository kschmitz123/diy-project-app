import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UploadProject from "../components/UploadProject";
import Container from "../components/Container";

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
