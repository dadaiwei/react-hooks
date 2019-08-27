import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ExampleUseMemo() {
  const [name, setName] = useState("小明");
  const [sex, setSex] = useState("男");
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setName(new Date().getTime());
        }}>
        小红
      </button>
      <button
        onClick={() => {
          setSex(new Date().getTime() + "男");
        }}>
        女
      </button>
      <ChildComponent name={name}>{sex}</ChildComponent>
    </React.Fragment>
  );
}

export default ExampleUseMemo;
