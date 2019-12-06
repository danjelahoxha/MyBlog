import React from "react";
import styled from "styled-components";
import "../App.css";
import MainContainer from "./MainContainer";
import Nav from "./Nav";

const Root = styled.div`
  background: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Root>
      <Nav />
      <MainContainer />
    </Root>
  );
}

export default App;
