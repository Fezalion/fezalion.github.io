import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";

function Home() {
  return (
    <>
      <motion.main
        className="relative z-0 grid w-full grid-flow-row grid-cols-1 mt-0 snap-y snap-mandatory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Projects />
      </motion.main>
    </>
  );
}

export default Home;
