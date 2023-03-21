import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";
//todo: maybe a better animation idk man

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
            initial="hidden"
            animate="show"
            variants={FezAnimations.container}
          >
            Hello, I'm{" "}
            <m.span
              className="text-secondary-500"
              variants={FezAnimations.container}
              initial="hidden"
              animate="show"
            >
              {Array(..."Fezalion").map((s, i) => (
                <m.div
                  key={i}
                  className="inline-flex"
                  variants={FezAnimations.itemU}
                >
                  {s}
                </m.div>
              ))}
            </m.span>
          </m.h1>
          <m.p
            className="mt-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"
            initial="hidden"
            animate="show"
            variants={FezAnimations.itemDelay}
          >
            I make coffee into code.
          </m.p>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default Hero;
