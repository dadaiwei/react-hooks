import React, { useMemo } from "react";

function ChildComponent({ name, children }) {
  function changeName(name) {
    console.log("获得了name");
    return name + "信息";
  }
  const actionName = useMemo(() => changeName(name), [name]);
  return (
    <React.Fragment>
      <div>{actionName}</div>
      <div>{children}</div>
    </React.Fragment>
  );
}

export default ChildComponent;
