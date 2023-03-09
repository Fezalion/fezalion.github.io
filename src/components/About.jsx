import React, { useEffect } from "react";
import { useAnimation, motion, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer";
import animationVariants from '../globals/Animations.jsx'

function About() {
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
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div className="mr-auto place-self-center lg:col-span-7 text-left"
            ref={ref}
            initial="hiddenleft"
            animate={controls}
            variants={animationVariants}
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-100">
              About Me
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              I live in Turkey, I feel like i am 30 years old and probably am. I
              like coding and coffee, I have a cute kitten. I used to play
              piano, nowadays I just listen or goof around in DAWs. I enjoy a
              lot of genres, take a peek on my{" "}
              <a
                className="text-green-400 cursor-pointer"
                href="https://open.spotify.com/user/ilikecakecups"
              >
                spotify
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
            ref={ref}
            initial="hiddenright"
            animate={controls}
            variants={animationVariants}
          >
            <img
              src="https://placehold.jp/3d4070/ffffff/600x600.png"
              alt="uwu"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
