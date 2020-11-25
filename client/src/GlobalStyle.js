import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
:root {
    --main-color: #FCA311;
    --main-font-color: #222020;
    --secondary-font-color: #8E8E8E;
    --button-color: white;
}

body,
button, textarea {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-font-color)
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1, h2 {
    font-family: 'Pacifico', cursive;
}
`;

export default GlobalStyle;
