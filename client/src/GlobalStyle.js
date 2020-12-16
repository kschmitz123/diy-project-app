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
    --main-box-shadow: 3px 3px 5px hsla(300, 15%, 25%, 0.3) inset;
}

.box {
  min-width: 320px;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
}


body
 {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-font-color)
}
button, textarea {
  font-family: 'Montserrat', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1, h2 {
    font-family: 'Pacifico', cursive;
}
h3{
  margin: 5px
}
`;

export default GlobalStyle;
