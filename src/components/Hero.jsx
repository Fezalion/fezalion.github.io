import React from "react";
import { motion } from "framer-motion";

//todo: maybe a better animation idk man
const animationVariants = {
  come_from_right: { x: 500, opacity: 0 },
  come_from_left: { x: -500, opacity: 0 },
  come_from_up: { y: -500, opacity: 0 },
  come_from_down: { y: 500, opacity: 0 },
  hidden: { opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.5, 1, 0.89, 1] },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      ease: [0.5, 1, 0.89, 1],
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 500 },
  show: { opacity: 1, x: 0 },
};

function Hero() {  
  return (
    <>
      <section className="relative z-0 grid content-center w-auto h-auto min-w-full min-h-screen mx-auto text-center snap-center">        
        <div className="w-auto h-auto min-w-full py-32">
          <motion.h1
            className="text-2xl font-extrabold leading-none tracking-tight text-primary-100 md:text-4xl xl:text-6xl"            
            initial="come_from_left"
            animate="visible"
            variants={animationVariants}
          >
            Hello, I'm{" "}
            <motion.span
              className="text-secondary-500"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.span className="transform-gpu" variants={item}>
                F
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                e
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                z
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                a
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                l
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                i
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                o
              </motion.span>
              <motion.span className="transform-gpu" variants={item}>
                n
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"            
            initial="come_from_right"
            animate="visible"
            variants={animationVariants}
          >
            I make coffee into code.
          </motion.p>
        </div>
      </section>
    </>
  );
}

export default Hero;
