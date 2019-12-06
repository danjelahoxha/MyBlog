import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import GlobalStyles from "./global";

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Root>
      <h1>It's a dark theme!</h1>
      <footer></footer>
    </Root>
  </ThemeProvider>
);

export default App;
