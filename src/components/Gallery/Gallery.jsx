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
        <div className="my-auto mx-auto w-full pt-16 text-primary-100">
          <m.div
            className="mx-auto text-center"
            variants={FezAnimations.container}
            initial="hidden"
            animate="show"
          ></m.div>
          <m.div
            className="grid w-full grid-flow-row grid-cols-1 gap-4"
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
