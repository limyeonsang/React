import React from "react";
import Immutability from "./immutability";
import WithImmer from "./WithImmer";

const App = () => {
  return (
    <div>
      <div>
        <Immutability></Immutability>
      </div>
      <div>
        <WithImmer></WithImmer>
      </div>
    </div>
  );
};

export default App;
