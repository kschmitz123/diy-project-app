import styled from "styled-components/macro";
import loadingAnimationSrc from "../assets/loading_animation.gif";
import ProgressBar from "../assets/progress_bar.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background: var(--main-color);

  h1 {
    font-size: 3.5rem;
  }
`;

const LoadingScreen = () => {
  return (
    <Container>
      <h1>Craftified</h1>
      <img src={loadingAnimationSrc} alt="gif" />
      <img src={ProgressBar} alt="" />
    </Container>
  );
};
export default LoadingScreen;
