import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Rating from "./Rating";
import skills from "./skills";
import FezAnimations from "../animations";

function About() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="relative z-0 mx-auto h-auto w-auto min-w-full snap-center content-center pb-24 text-center sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="my-auto mx-auto w-full pt-32 text-primary-100">
          <m.div
            className="mx-auto max-w-screen-md text-center"
            variants={FezAnimations.container}
            initial="hidden"
            animate="show"
          >
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Skills &amp; Technologies
            </h1>
            <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              I have basic entry level knowledge on most of the tech stack but
              here is some that I think I am more capable of.
            </p>
          </m.div>
          <m.div
            className="grid w-full max-w-screen-lg grid-flow-row grid-cols-1 gap-4 md:mx-auto md:mb-0 md:grid-cols-2"
            variants={FezAnimations.container}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, i) => (
              <m.div
                className="flex h-full w-full flex-col items-center justify-end gap-4 rounded border-secondary-500 py-4 px-2 backdrop-blur-sm lg:border"
                variants={
                  i % 2 != 0 ? FezAnimations.itemR : FezAnimations.itemL
                }
                key={i}
              >
                <div className="h-full w-full">
                  <span
                    className={`${
                      i % 2 != 0 ? "sm:order-3" : "sm:order-none"
                    } title-font h-full w-full font-medium text-white`}
                  >
                    {skill.name}
                  </span>
                  <p className="h-full w-full text-gray-500">{skill.desc}</p>
                </div>

                <div className={`flex w-full flex-row justify-center gap-2`}>
                  <Rating
                    rate={skill.score}
                    fgCol={"bg-secondary-500 rounded-full"}
                    bgCol={"bg-primary-400 rounded-full"}
                    css={"w-8 p-1"}
                  />
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default About;
