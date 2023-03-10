import React from "react";

import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";

function Home() {
  return (
    <>
      <main className="relative z-0 grid w-full min-h-screen grid-flow-row grid-cols-1 mt-0">
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default Home;
