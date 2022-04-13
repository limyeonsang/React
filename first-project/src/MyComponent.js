import React from "react";

const MyComponent = (props) => {
  const {name, children} = props
  return (
    <div>
      응 {name} 애 <br />
      children is: {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "Default Name",
};

export default MyComponent;
