import React from "react";
import MyComponent from "./MyComponent";
import IterationSample from "./IterationSample";

const App = () => {
  // return <MyComponent name="안녕" />;
  return (
    <>
      <MyComponent>안녕 나는 차일드야~</MyComponent>
      <IterationSample />
    </>
  );
};

export default App;
