import React from "react";
import Text from "./introtext";
import Imagediv from "./img";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black relative overflow-hidden border-b border-gray-900 min-h-screen pt-32 pb-16 flex items-center"
    >
      {/* Content Container */}
      <div className="max-w-6xl w-full mx-auto md:flex relative px-6">
        {/* Text partition */}
        <div className="  w-full md:w-1/2 flex flex-col justify-center relative z-10">
          <Text />
        </div>

        {/* Image partition */}
        <div className="   md:w-1/2 relative flex  justify-center items-center   ">
          <Imagediv />
        </div>
      </div>
    </section>
  );
}
