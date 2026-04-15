import React from "react";
import Hero from "../components/hero/hero";
import Navbar from "../components/hero/navbar";
import About from "../components/main/about";
import SkillSection from "../components/main/skillSection";
import Projects from "../components/main/projects";
import Contacts_us from "../components/main/contactUs"; 


function MainLayout() {
  return (
    <>
      <div className="min-h-screen border-2 border-amber-300  bg-gray-900 ">
        <Navbar />
        <Hero />
        <About />
        <SkillSection />      
        <Projects />
        <Contacts_us />

      </div>
    </>
  );
}

export default MainLayout;
