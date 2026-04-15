import React from "react";
import Trangoimg from "../../assets/trango.jpeg";

const projects = [
  {
    num: "01",
    name: "Trango",
    img: Trangoimg,
    link: "https://trango.in/",
    tech: "HTML · CSS · JavaScript",
    description: "Modern detergent product website with a dynamic product showcase system.",
  },
  {
    num: "02",
    name: "Da Rambo Pizza",
    img: "https://i.pinimg.com/736x/45/11/81/45118123f9d170ef6fef2146255b2f82.jpg",
    link: "https://da-rambo-pizza.vercel.app",
    tech: "React · Tailwind CSS",
    description: "Full-featured pizza ordering website with cart and order management.",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black  md:py-28 border border-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Unique heading layout ── */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase font-bold mb-3">Things I've built</p>
            <h1
              style={{ fontFamily: "'MangoGrotesque', sans-serif", lineHeight: "0.85", letterSpacing: "0.03em" }}
              className="text-[80px] text-white uppercase"
            >
              SELECTED<br />
              <span className="text-gray-700">WORK</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <div className="w-8 h-[1px] bg-gray-700"></div>
            <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">{projects.length} Projects</span>
          </div>
        </div>

        {/* ── Project cards — horizontal editorial style ── */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-[80px_1fr_320px] items-center border-t border-gray-900 py-10 gap-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* number */}
              <span
                style={{ fontFamily: "'MangoGrotesque', sans-serif" }}
                className="text-5xl text-gray-800 group-hover:text-gray-600 transition-colors duration-300 leading-none"
              >
                {project.num}
              </span>

              {/* info */}
              <div>
                <h2 className="text-white text-2xl font-bold tracking-widest uppercase mb-2 group-hover:text-gray-200 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-3">{project.tech}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{project.description}</p>
              </div>

              {/* image */}
              <div className="h-[160px] overflow-hidden ">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </a>
          ))}
          {/* closing border */}
          <div className="border-t border-gray-900"></div>
        </div>

      </div>
    </section>
  );
}

export default Projects;