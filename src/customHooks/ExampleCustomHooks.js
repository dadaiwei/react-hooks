import React from "react";
import useWinSize from "./useWinSize";

function ExampleCustomHooks() {
  const size = useWinSize();
  return (
    <div>
      页面Size：{size.width} * {size.height}
    </div>
  );
}

export default ExampleCustomHooks;
