import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      delay: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Projects() {
  return (
    <>
      <motion.section
        className="relative z-0 mx-auto mt-16 grid h-auto min-h-screen w-auto min-w-full snap-center content-center text-center lg:mt-0 lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="z-0 mx-auto max-w-screen-2xl px-4 sm:pb-16 lg:mb-0 lg:px-6">
          <motion.div
            className="mb-8 max-w-screen-md lg:mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-100">
              I do play games a lot, and sometimes code my own tools for the
              games I play.
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Here you can see some of the repos I use, or code myself.
            </p>
          </motion.div>

          <motion.div
            className="grid space-y-8 text-left md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  FezBotRedux
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/Fezalion/FezBotRedux"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                A discord chat bot coded in{" "}
                <a
                  className="cursor-pointer text-secondary-500"
                  target="_blank"
                  href="https://discordnet.dev/"
                >
                  Discord.NET
                </a>{" "}
                library, mainly used privately in my own server.
              </p>
            </motion.article>
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  ConsoleMenuGeneric
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/Fezalion/ConsoleMenuGeneric"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                Keyboard operated switch menu coded in C#, mainly used for
                personal highschool projects and abandoned since graduation.
              </p>
            </motion.article>
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  ForzaTuneHelper
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/Fezalion/ForzaTuneHelper"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                I love racing games. Something I love more than racing games is
                drifting in racing games. I hate tuning cars for hours, so I
                made a tool to help me tune my cars to drift. This was made for{" "}
                <a
                  className="cursor-pointer text-secondary-500"
                  target="_blank"
                  href="https://store.steampowered.com/app/1293830/Forza_Horizon_4/"
                >
                  Forza Horizon 4
                </a>{" "}
                but abandoned since newer titles came out.
              </p>
            </motion.article>
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  Fezalion.tech
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/Fezalion/Fezalion.tech"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                This very website you are on, built with ReactJS, using vite.
              </p>
            </motion.article>
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  thefuck by nvbn
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/nvbn/thefuck"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                Magnificent app which corrects your previous console command,
                which is something I can't live without anymore. Its genious
                work.
              </p>
            </motion.article>
            <motion.article variants={item}>
              <h3 className="mb-2 w-auto text-xl font-bold text-primary-100">
                <span className="relative">
                  owoifier
                  <a
                    className="absolute top-1 -right-6 scale-75"
                    target="_blank"
                    href="https://github.com/powercord-community/owoifier"
                  >
                    <svg
                      fill="currentColor"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                    </svg>
                  </a>
                </span>
              </h3>
              <p className="text-gray-400">
                Dead project of mine, after powercord closed I stopped
                developing it.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
