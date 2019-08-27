import React, { useState, useEffect } from "react";

function ExampleUseState() {
  const [count, setCount] = useState(0);
  const [sex, setSex] = useState("男");
  const [work, setWork] = useState("前端程序员");
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log("useEffect=>老弟，你走了，Example页面");
    };
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>性别：{sex}</p>
      <p>工作是：{work}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleUseState;
