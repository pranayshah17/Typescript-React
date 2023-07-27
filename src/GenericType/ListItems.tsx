import React from "react";
import { List } from "./List";

export const ListItems = () => {
  return (
    <div>
      <List
        items={["batman", "superman", "shaktiman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { first: "pranay", last: "Shah" },
          { first: "Rohan", last: "patel" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};
