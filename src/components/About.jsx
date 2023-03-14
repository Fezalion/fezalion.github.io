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
        className="relative z-0 grid content-center w-auto h-auto min-w-full min-h-screen mx-auto text-center snap-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div>
          
        </motion.div>
      </motion.section>
    </>
  );
}

export default About;
