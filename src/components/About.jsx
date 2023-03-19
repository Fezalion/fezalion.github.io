import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Rating from "./Rating";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      delay: 0,
      type: "spring",
      bounce: 0.25,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const itemL = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 },
};
const itemR = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0 },
};

const skills = [
  {
    name: "C#",
    desc: "dotnet core, MVC, winforms, maui, Blazor and other C# family members",
    score: 7,
  },
  {
    name: "JavaScript",
    desc: "React, TypeScript, still learning about more",
    score: 6,
  },
  {
    name: "Photo Editing",
    desc: "GIMP, Adobe Photoshop, Adobe Lightroom, Adobe Illustrator",
    score: 5,
  },
  {
    name: "Video Editing",
    desc: "Adobe After Effects, and simple video editing",
    score: 5,
  },
];

function About() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="relative z-0 mx-auto h-auto min-h-screen w-auto min-w-full snap-center content-center overflow-y-scroll text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <m.div className="my-auto mx-auto max-h-screen min-h-fit w-full max-w-screen-xl pt-32 text-primary-100">
          <div className="mb-20 text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Skills &amp; Technologies
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-3/4 xl:w-2/4">
              I have basic entry level knowledge on most of the tech stack but
              here is some that I think I am more capable of.
            </p>
          </div>
          <m.div
            className="mx-auto mb-64 grid w-full grid-flow-row grid-cols-1 gap-4 md:mb-0 md:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, i) => (
              <m.div
                className="flex h-full w-full flex-col items-center justify-end gap-4 rounded border border-secondary-500 py-4 px-2 backdrop-blur-sm"
                variants={i % 2 != 0 ? itemR : itemL}
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
        </m.div>
      </m.section>
    </LazyMotion>
  );
}

export default About;
