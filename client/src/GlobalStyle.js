import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
:root {
    --main-color: #b3857c;
    --secondary-color: #d0a79f;
    --main-font-color: #222020;
    --button-color: white;
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
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-font-color)
}
button, textarea, select, input {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  outline: none;
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
