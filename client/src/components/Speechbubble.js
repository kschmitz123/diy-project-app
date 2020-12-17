import styled from "styled-components/macro";

export const Speechbubble = styled.div`
  width: 80%;
  margin: 10px auto;
  border: 3px solid var(--main-color);
  padding: 5px;
  text-align: center;
  color: var(--main-font-color);
  position: relative;
  border-radius: 10px;

  &&:before {
    content: "";
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--main-color);
    right: 50%;
    top: -10px;
  }
`;
