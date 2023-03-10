import React from "react";

import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";

function Home() {
  return (
    <>
      <main className="relative z-0 grid w-auto min-h-screen grid-flow-row grid-cols-1 px-8 mx-4 mt-0 md:mx-8 lg:mx-16 animate-pop-in">
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default Home;
