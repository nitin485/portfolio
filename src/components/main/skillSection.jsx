import React from "react";
import Htmlimg from "../../assets/html5-original.svg";

const skills = [
  { name: "HTML", img: Htmlimg },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

function SkillSection() {
  return (
    <section className="bg-black py-28 border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Unique heading layout ── */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase font-bold mb-3">What I work with</p>
            <h1
              style={{ fontFamily: "'MangoGrotesque', sans-serif", lineHeight: "0.85", letterSpacing: "0.03em" }}
              className="text-[80px] text-white uppercase"
            >
              MY<br />
              <span className="text-gray-700">SKILLS</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 pb-3">
            <div className="w-8 h-[1px] bg-gray-700"></div>
            <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">6 Technologies</span>
          </div>
        </div>

        {/* ── Skill cards ── */}
        <div className="grid grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center py-10 px-4 border border-gray-900 bg-[#080808] hover:border-gray-600 hover:bg-[#0f0f0f] transition-all duration-300 cursor-default"
            >
              <img
                src={skill.img}
                className="w-10 mb-5 grayscale group-hover:grayscale-0 transition-all duration-300"
                alt={skill.name}
              />
              <p className="text-gray-600 group-hover:text-white text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillSection;