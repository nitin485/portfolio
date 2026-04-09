import React from "react";
import Arrows from "./arrows";
import { RiMenu2Line } from "@remixicon/react";

function Navbar() {
  return (
    <section className="absolute top-0 w-full z-50 bg-transparent ">
      <div className="max-w-6xl px-6 mx-auto pt-8">
        <div className="flex justify-between items-center">
          {/* arrow and name container */}
          <div className="flex items-center">
            <Arrows />
            <div className="ml-4 mt-2">
              <h3 className="uppercase text-lg text-white font-bold tracking-[0.2em] leading-none mb-1">
                NITIN
              </h3>
              <h3 className="uppercase text-[10px] text-gray-500 font-bold tracking-[0.3em] leading-none">
                BHARDWAJ
              </h3>
            </div>
          </div>
          {/* nav links */}
          <nav>
            <ul className="flex space-x-10 text-xs tracking-widest font-bold text-gray-400 uppercase">
              <li>
                <a href="#home" className="hover:text-white transition-colors">WORK</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
              </li>
              <li className="md:hidden ">
                <RiMenu2Line size={24} className="text-white" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
