import React, { useEffect } from "react";
import { useAnimation, motion, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer";
import animationVariants from "../globals/Animations.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren'
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <section className="z-0 h-auto max-w-screen-xl px-4 mx-auto text-center lg:min-h-screen lg:pb-8 lg:py-16 lg:px-12">
        <motion.h1
          className="mb-4 mt-32 lg:mt-64 text-4xl font-extrabold tracking-tight leading-none text-primary-100 md:text-4xl xl:text-6xl"
          ref={ref}
          initial="hiddenleft"
          animate={controls}
          variants={animationVariants}
        >
          Hello, I'm{" "}
          <motion.span
            className="text-secondary-500"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item}>F</motion.span>
            <motion.span variants={item}>e</motion.span>
            <motion.span variants={item}>z</motion.span>
            <motion.span variants={item}>a</motion.span>
            <motion.span variants={item}>l</motion.span>
            <motion.span variants={item}>i</motion.span>
            <motion.span variants={item}>o</motion.span>
            <motion.span variants={item}>n</motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 animate-pop-in"
          ref={ref}
          initial="hiddenright"
          animate={controls}
          variants={animationVariants}
        >
          I make coffee into code.
        </motion.p>
      </section>
    </>
  );
}

export default Hero;
