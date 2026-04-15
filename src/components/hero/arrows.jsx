import React from "react";
import { RiArrowRightUpLine, RiSubtractLine } from "@remixicon/react";

function Arrows() {
  return (
    <div
      className="wrapper   relative   top-1 w-fit  ml-2
    "
    >
      <RiArrowRightUpLine size={45} color="white" />

      <div className="subarrow  absolute top-5 left-1 ">
        <RiSubtractLine size={40} color="white" />
      </div>
    </div>
  );
}

export default Arrows;
