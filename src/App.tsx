import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";


export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>
        ola
      </h1>
    </ThemeProvider>
  )
}
