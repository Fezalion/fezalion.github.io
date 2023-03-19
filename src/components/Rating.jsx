import React, { useState } from "react";

function Rating(props) {
  const rating = props.rate;
  return (
    <>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={`${
              index <= rating ? "bg-secondary-600" : "bg-primary-400"
            } w-8 p-1`}
          ></div>
        );
      })}
    </>
  );
}

export default Rating;
