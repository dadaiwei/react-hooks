import React, { useRef } from "react";

function ExampleUseRef() {
  const inputElm = useRef(null);
  const onButtonClick = () => {
    inputElm.current.value = "Hello，Xiaoming";
  };
  return (
    <React.Fragment>
      <input ref={inputElm} type='text' />
      <button onClick={onButtonClick}>在input上展示文字</button>
    </React.Fragment>
  );
}

export default ExampleUseRef;
