import React from "react";
import { Color } from "./Color";
import ShowArea from "./ShowArea";
import Buttons from "./Buttons";

function ExampleReducerRedux() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default ExampleReducerRedux;
