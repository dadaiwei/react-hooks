import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExampleUseState from "./useState/Example-useState";
import ExampleUseEffect from "./useEffect/Example-useEffect";
import ExampleUseContext from "./useContext/Example-useContext";
import ExampleUseReducer from "./useReducer/Example-useReducer";
import ExampleUseReducerRedux from "./useReducerRedux/ExampleUseReducerRedux";
import ExampleUseMemo from "./useMemo/ExampleUseMemo";
import ExampleUseRef from "./useRef/ExampleUseRef";
import ExampleCustomHooks from "./customHooks/ExampleCustomHooks";

function App() {
  return (
    <div>
      <h2>React hooks各种应用：</h2>
      <Router>
        <ul>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/useState'>useState</Link>
          </li>
          <li>
            <Link to='/useEffect'>useEffect</Link>
          </li>
          <li>
            <Link to='/useContext'>useContext</Link>
          </li>
          <li>
            <Link to='/useReducer'>useReducer</Link>
          </li>
          <li>
            <Link to='/useReducerRedux'>useReducerRedux（useReducer+useContext代替redux）</Link>
          </li>
          <li>
            <Link to='/useMemo'>useMemo（优化React hooks性能）</Link>
          </li>
          <li>
            <Link to='/useRef'>useRef（获取DOM元素）</Link>
          </li>
          <li>
            <Link to='/customHooks'>customHooks（获取窗体高度、宽度）</Link>
          </li>
        </ul>
        <Route path='/useState' component={ExampleUseState}></Route>
        <Route path='/useEffect' component={ExampleUseEffect}></Route>
        <Route path='/useContext' component={ExampleUseContext}></Route>
        <Route path='/useReducer' component={ExampleUseReducer}></Route>
        <Route path='/useReducerRedux' component={ExampleUseReducerRedux}></Route>
        <Route path='/useMemo' component={ExampleUseMemo}></Route>
        <Route path='/useRef' component={ExampleUseRef}></Route>
        <Route path='/customHooks' component={ExampleCustomHooks}></Route>
      </Router>
    </div>
  );
}

export default App;
