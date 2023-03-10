import React from "react";
import { motion } from "framer-motion";

import About from "../components/About.jsx";

function AboutPage() {
  return (
    <>
      <motion.main
        className="relative z-0 grid w-full grid-flow-row grid-cols-1 mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <About />
      </motion.main>
    </>
  );
}

export default AboutPage;
