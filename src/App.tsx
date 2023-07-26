import React from "react";
import Heading from "./Components/Heading";
import Parent from "./Components/Parent";

function App() {
  return (
    <>
      <Heading>Good Morning</Heading>;
      <Parent>
        <Heading>Good Morning</Heading>
      </Parent>
      ;
    </>
  );
}

export default App;
