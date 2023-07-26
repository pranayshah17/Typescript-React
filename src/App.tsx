import React from "react";
import Heading from "./Components/Heading";
import Parent from "./Components/Parent";
import User from "./User";

function App() {
  return (
    <>
      <Heading>Good Morning</Heading>
      <Parent>
        <Heading>Good Morning</Heading>
      </Parent>
      <User name="pranay" isLogggedIn={true} />
    </>
  );
}

export default App;
