import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      delay: 1,
      duration: 0.5,
      ease: "anticipate",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Rating(props) {
  const rating = props.rate;
  const bgColor = props.bgCol;
  const fgColor = props.fgCol;
  const customCSS = props.css;
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-row justify-center gap-2"
      >
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
            <m.div
              key={index}
              variants={item}
              className={`${index <= rating ? fgColor : bgColor} ${customCSS}`}
            ></m.div>
          );
        })}
      </m.div>
    </LazyMotion>
  );
}

export default Rating;
