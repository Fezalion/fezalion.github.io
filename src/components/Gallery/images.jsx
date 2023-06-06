import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";

import img1 from "../../images/00000.png";
import img2 from "../../images/00001.png";
import img3 from "../../images/00002.png";
import img4 from "../../images/00003.png";
import img5 from "../../images/00004.png";

const images = [img1, img2, img3, img4, img5];

const ImagesComponent = () => {
  return (
    <>
      {images.map((img, i) => (
        <m.div
          className="flex h-full w-full flex-col items-center justify-end gap-4 rounded border-secondary-500 py-4 px-2 backdrop-blur-sm lg:border"
          variants={FezAnimations.container}
          key={i}
        >
          <div className="h-full w-full">
            <img
              className="title-font h-full w-full font-medium text-white"
              src={img}
            />
          </div>
        </m.div>
      ))}
    </>
  );
};

export default ImagesComponent;
