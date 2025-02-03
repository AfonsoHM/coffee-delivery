import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: ${(props) => props.theme.colors["base-background"]};
  color: ${(props) => props.theme.colors["base-text"]};
  -webkit-font-smoothing: antialiased;
}

body, input, text-area, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
`