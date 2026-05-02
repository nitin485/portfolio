import React, { useState } from "react";
import Arrows from "./arrows";
import { RiMenu2Line } from "@remixicon/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false );
  return (
    <section className=" w-full z-50  fixed top-0   shadow-md       left-0   ">
      <div className=" md:max-w-6xl px-2 md:px-6 mx-auto py-4 ">
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
            <ul className="hidden md:flex space-x-10 text-xs tracking-widest font-bold text-gray-400 uppercase">
              <li className="">
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <RiMenu2Line
                size={24}
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </nav>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="flex justify-end relative -mt-8 ml-44 bg-black opacity-75">
            <div className="   mt-0    h-[91vh]   flex justify-center    border-t border-gray-900 z-50  rounded-3xl w-1/2  ">
              <ul className=" flex   flex-col gap-20  w-100%    text-sm tracking-widest   cursor-pointer font-bold text-gray-400 uppercase  items-end    ">
                <RiMenu2Line
                  size={24}       
                  className="text-white"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                {/* <li><button onclickz> hello</button></li> */}
                <li>
                  <a href="#projects">Work</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
