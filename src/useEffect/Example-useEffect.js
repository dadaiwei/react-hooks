import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("useEffect=>老弟，你来了！Index页面");
    return () => {
      console.log("老弟，你走了!Index页面");
    };
  }, []);
  return <h2>This is Index.</h2>;
}

function List() {
  useEffect(() => {
    console.log("useEffect=>老弟，你来了！List页面");
  });
  return <h2>This is List.</h2>;
}

function ExampleUseEffect() {
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
      <ul>
        <li>
          <Link to='/use-effect/Index'>Index</Link>
        </li>
        <li>
          <Link to='/use-effect/list'>List</Link>
        </li>
      </ul>
      <Route path='/use-effect/Index' exact component={Index}></Route>
      <Route path='/use-effect/list' component={List}></Route>
    </div>
  );
}

export default ExampleUseEffect;
