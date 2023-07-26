import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </>
  );
}

export default App;
