import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
`;

function App() {
  return (
    <>
      <Box>react</Box>
    </>
  );
}

export default App;
