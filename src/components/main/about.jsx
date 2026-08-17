import React from "react";
import Imggg from "../../assets/nitinb_.png";

function About() {
  return (
    <section
      id="about"
      className="bg-black  py-10  md:py-28 text-white border-b border-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Heading ── */}
        <div className="md:flex items-end justify-between mb-20">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase font-bold mb-3">
              Who I am
            </p>
            <h1
              style={{
                fontFamily: "'MangoGrotesque', sans-serif",
                lineHeight: "0.85",
                letterSpacing: "0.03em",
              }}
              className="text-[80px] text-white uppercase"
            >
              ABOUT
              <br />
              <span className="text-gray-700">ME</span>
            </h1>
          </div>
          <div className="flex gap-12 pb-3  mt-10  text-gray-700 text-[10px] tracking-[0.25em] uppercase font-bold">
            <span className="border px-2 md:py-3 block">Web Designer</span>
            <span className="border px-2 md:py-3 block">Web Developer</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="md:grid grid-cols-2 gap-16 items-center ">
          {/* image */}
          <div className="md:flex justify-center hidden ">
            <div className="relative">
              {/* offset frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gray-800"></div>
              <div className="w-64 h-64 overflow-hidden bg-black ">
                <img
                  src={Imggg}
                  alt="Nitin Bhardwaj"
                  className="w-full h-[120%] object-cover object-top grayscale"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div>
            <div className="md-border-l-2 border-gray-800   w-full px-2 h-fit  border-2  rounded-xl py-8">
              <p className="text-gray-400 tracking-wide leading-6 text-sm md:text-sm">
                I'm a frontend developer focused on converting modern UI designs
                into clean, responsive websites. I work primarily with HTML,
                CSS, JavaScript, and Tailwind CSS to build structured and
                user-friendly interfaces. I also have working knowledge of React
                and enjoy creating interactive components while continuously
                improving my frontend development skills through real-world
                projects.
              </p>
            </div>

            {/* experience ,projects,and technologies */}

            {/* <div className=" hidden  border md:flex gap-6 mt-10">
              <div className="border border-gray-900 px-6 py-4 text-center">
                <p className="text-white text-xl font-bold tracking-widest">
                  2+
                </p>
                <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Years Exp.
                </p>
              </div>
              <div className="border border-gray-900 px-6 py-4 text-center">
                <p className="text-white text-xl font-bold tracking-widest">
                  10+
                </p>
                <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Projects
                </p>
              </div>
              <div className="border border-gray-900 px-6 py-4 text-center">
                <p className="text-white text-xl font-bold tracking-widest">
                  6+
                </p>
                <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  Technologies
                </p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
