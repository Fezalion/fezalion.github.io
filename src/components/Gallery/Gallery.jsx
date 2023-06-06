import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";

import FezAnimations from "../animations";
import ImagesComponent from "./images";

function Gallery() {
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
              Gallery
            </h1>
            <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              Some of my Stable Diffusion creations.
            </p>
          </m.div>
          <m.div
            className="grid w-full max-w-screen-lg grid-flow-row grid-cols-1 gap-4 md:mx-auto md:grid-cols-2 md:pb-16"
            variants={FezAnimations.container}
            initial="hidden"
            animate="show"
          >
            <ImagesComponent />
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

export default Gallery;
