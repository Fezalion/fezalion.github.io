import React, { useState } from "react";

function Rating(props) {
  const rating = props.rate;
  const bgColor = props.bgCol;
  const fgColor = props.fgCol;
  const customCSS = props.css;
  return (
    <>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={`${index <= rating ? fgColor : bgColor} ${customCSS}`}
          ></div>
        );
      })}
    </>
  );
}

export default Rating;
