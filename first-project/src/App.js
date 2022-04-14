import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter></Counter>
      <hr />

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "display"}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
