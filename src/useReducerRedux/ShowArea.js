import React, { useContext } from "react";
import { ColorContext } from "./Color";

function ShowArea() {
  const { color } = useContext(ColorContext);
  return <div style={{ color }}>字体颜色为blue</div>;
}

export default ShowArea;
