import styled from "styled-components/macro";
import UploadProject from "../components/UploadProject";

const Container = styled.div`
  padding: 10px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const AddProjectPage = () => {
  return (
    <Container>
      <UploadProject />
    </Container>
  );
};
