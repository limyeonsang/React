import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import ValidationSample from "./ValidationSample";

const App = () => {
  return (
    <div>
      <Counter></Counter>
      <hr />
      <Info />
      <hr />
      <Average></Average>
      <hr />
      <ValidationSample></ValidationSample>
    </div>
  );
};

export default App;
