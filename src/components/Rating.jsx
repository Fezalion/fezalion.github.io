import React, { useState } from "react";

function Rating(props) {
  const rating = props.rate;
  const bgColor = props.bgCol;
  const fgColor = props.fgCol;
  return (
    <>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={`${index <= rating ? fgColor : bgColor} w-8 p-1`}
          ></div>
        );
      })}
    </>
  );
}

export default Rating;
