import React from "react";
import { motion } from "framer-motion";

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
  { name: "C#", score: 25 },
  { name: "C#", score: 35 },
  { name: "C#", score: 45 },
  { name: "C#", score: 55 },
  { name: "C#", score: 65 },
  { name: "C#", score: 75 },
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
                      i % 2 == 0 ? "order-3" : "order-none"
                    } title-font font-medium text-white`}
                  >
                    {skill.name}
                  </span>
                  <div className="w-full -skew-x-[24deg] bg-gray-700">
                    <div
                      className="bg-secondary-600 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{ width: `${skill.score}%` }}
                    >
                      {skill.score}%
                    </div>
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
