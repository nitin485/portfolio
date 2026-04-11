import React from "react";

function Text() {
  return (
    <div className="flex flex-col text-white">
      {/* Eyebrow label */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-6 h-[1px] bg-gray-600"></div>
        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold">
          Hey there, I'm
        </span>
      </div>

      {/* Hero Name — MangoGrotesque */}
      <div className="mb-10 ">
        <h1
          style={{
            fontFamily: "'MangoGrotesque', sans-serif",
            letterSpacing: "0.04em",
            lineHeight: "0.9",
          }}
          className="text-[60px] font-bold text-white uppercase md:text-[96px]"
        >
          NITIN
        </h1>
        <h1
          style={{
            fontFamily: "'MangoGrotesque', sans-serif",
            letterSpacing: "0.04em",
            lineHeight: "0.9",
          }}
          className="text-[60px] font-bold text-gray-600 uppercase md:text-[96px]"
        >
          BHARDWAJ
        </h1>
      </div>

      {/* Description box */}
      <div className="border-l-2 border-gray-700 pl-5 mb-10 max-w-sm">
        <p className="text-[11px] tracking-[0.15em] text-white uppercase font-bold mb-2">
          Frontend Developer
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          I build clean, modern, and user-focused web interfaces using React,
          Tailwind CSS, and JavaScript.
        </p>
      </div>

      {/* CTA */}
      <div>
        <a
          href="../../assets/nitin_bhardwaj_cv.pdf"
          target="_blank"
          rel="noreferrer"
          download="nitin_bhardwaj_cv.pdf"
        >
          <button
            style={{ fontFamily: "inherit" }}
            className=" ml-6  md:ml-0 group flex items-center gap-4 border border-gray-700 px-4 py-2 md:px-8 md:py-4 text-[8px] md:text-[10px] tracking-[0.25em] uppercase font-bold text-white hover:border-white transition-all duration-300"
          >
            <span className="w-0 group-hover:w-6 h-[1px] bg-white transition-all duration-300 overflow-hidden"></span>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );2
}

export default Text;
