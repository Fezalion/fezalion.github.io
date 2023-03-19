import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";

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
    <LazyMotion features={domAnimation}>
      <m.section
        className="relative z-0 mx-auto grid h-auto min-h-screen w-auto min-w-full snap-center content-center overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="h-auto w-auto min-w-full py-32">
          <m.h1
            className="text-2xl font-extrabold leading-none tracking-tight text-primary-100 md:text-4xl xl:text-6xl"
            initial="come_from_left"
            animate="visible"
            variants={animationVariants}
          >
            Hello, I'm{" "}
            <m.span
              className="text-secondary-500"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <m.span className="transform-gpu" variants={item}>
                F
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                e
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                z
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                a
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                l
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                i
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                o
              </m.span>
              <m.span className="transform-gpu" variants={item}>
                n
              </m.span>
            </m.span>
          </m.h1>
          <m.p
            className="mt-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"
            initial="come_from_right"
            animate="visible"
            variants={animationVariants}
          >
            I make coffee into code.
          </m.p>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default Hero;
