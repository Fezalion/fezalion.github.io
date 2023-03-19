import React from "react";
import { motion } from "framer-motion";
import Rating from "./Rating";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      delay: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const skills = [
  { name: "C#", score: 7 },
  { name: "C#", score: 7 },
  { name: "C#", score: 5 },
  { name: "C#", score: 5 },
  { name: "C#", score: 2 },
  { name: "C#", score: 10 },
];

function About() {
  return (
    <>
      <motion.section
        className="relative z-0 mx-auto h-auto min-h-screen w-auto min-w-full snap-center content-center overflow-y-scroll text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="my-auto mx-auto max-h-screen min-h-fit w-full max-w-screen-xl pt-32 text-primary-100">
          <div className="mb-20 text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Skills &amp; Technologies
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.
            </p>
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            {skills.map((skill, i) => (
              <div key={i} className="w-full p-2 sm:w-1/2">
                <div className="flex h-full items-center gap-4 rounded border border-secondary-500 p-4">
                  <span
                    className={`${
                      i % 2 == 0 ? "sm:order-3" : "sm:order-none"
                    } title-font font-medium text-white`}
                  >
                    {skill.name}
                  </span>
                  <div className="flex w-full -skew-x-[24deg] flex-row gap-2">
                    <Rating rate={skill.score} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default About;
