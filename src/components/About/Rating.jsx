import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import FezAnimations from "../animations";

function Rating(props) {
  const rating = props.rate;
  const bgColor = props.bgCol;
  const fgColor = props.fgCol;
  const customCSS = props.css;
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={FezAnimations.RatingContainer}
        initial="hidden"
        animate="show"
        className="flex w-full flex-row justify-center gap-2"
      >
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
            <m.div
              key={index}
              variants={FezAnimations.item}
              className={`${index <= rating ? fgColor : bgColor} ${customCSS}`}
            ></m.div>
          );
        })}
      </m.div>
    </LazyMotion>
  );
}

export default Rating;
