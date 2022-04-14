import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <Counter></Counter>
      <hr />
      <Info />
      <hr />
      <Average></Average>
    </div>
  );
};

export default App;
