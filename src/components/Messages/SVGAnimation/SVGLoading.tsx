import React from "react";
import * as Styles from "./Loading.css";
import { FaArrowsRotate } from "react-icons/fa6";
const SVGLoading = () => {
  return (
    <Styles.MainLoading $sizesvg={"#334155"}>
      <FaArrowsRotate />
    </Styles.MainLoading>
  );
};

export default SVGLoading;
