import React from "react";
import { motion } from "framer-motion";

const Dict = [
  ["test", "test"],
  ["test2", "test2"],
  ["test3", "test3"],
  ["test4", "test4"],
];

function About() {
  return (
    <>
      <motion.section
        className="relative z-0 mx-auto grid h-auto min-h-screen w-auto min-w-full snap-center content-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div></motion.div>
      </motion.section>
    </>
  );
}

export default About;
