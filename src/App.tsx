import React from "react";
import User from "./Components/User";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";

function App() {
  const personName = {
    first: "pranay",
    last: "shah",
  };

  const personList = [
    {
      first: "pranay",
      last: "shah",
    },
    {
      first: "Nirav",
      last: "shah",
    },
    {
      first: "Rohan",
      last: "shah",
    },
  ];
  return (
    <div className="App">
      {/* <User name="pranay" messageCount={20} isLogggedIn={false} />
      <Person name={personName} />
      <PersonList nameList={personList} /> */}
      <Status status="Error" />
    </div>
  );
}

export default App;
