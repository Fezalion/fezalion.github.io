import React from "react";
import { motion } from "framer-motion";

const Dict = [
  [
    "C#",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    75,
  ],
  [
    "JS",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    50,
  ],
  [
    "Photoshop",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    70,
  ],
  [
    "Video Editing",
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    55,
  ],
  [
    "a",
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    50,
  ],
  [
    "b",
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    60,
  ],
  [
    "c",
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab accusamus, quo doloremque laboriosam cupiditate debitis omnis sit quis suscipit odio dolor ducimus esse eos eligendi impedit sed libero eaque blanditiis?",
    70,
  ],
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
          <div className="w-full p-4 sm:p-6">
            <h5 className="mb-3 text-base font-semibold text-primary-100 md:text-xl">
              My skills
            </h5>
            <p className="text-sm font-normal text-gray-500">
              Over the years I self thougth myself on skills I intend to use,
              and I still try learn and use new technologies
            </p>
            <div className="my-4 grid grid-flow-row grid-cols-1 lg:grid-cols-2">
              {Dict.map((x, i) => (
                <div className="flex flex-row gap-2 p-4 text-white">
                  <img
                    src="https://placehold.jp/150x200.png"
                    className={`${i % 2 == 0 ? "order-3" : "order-none"}`}
                  ></img>
                  <div
                    className={`flex w-full flex-col justify-start gap-2 ${
                      i % 2 == 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="text-2xl font-extrabold leading-none text-primary-100">
                      {x[0]}
                    </span>
                    <p className="text-xs font-normal text-gray-200">{x[1]}</p>
                    <span className="w-full min-w-full">
                      <div className="w-full rounded-full bg-gray-700">
                        <div
                          className="rounded-full bg-secondary-600 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                          style={{ width: `${x[2]}%` }}
                        >
                          {x[2]}%
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default About;
