import { React, useState } from "react";

function Hero() {
  return (
    <>
      <div className="z-0 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-100 md:text-5xl lg:text-6xl">
          Hello, I'm <span className="text-secondary-500">Fezalion</span>
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            I make coffee into code.
        </p>
      </div>
    </>
  );
}

export default Hero;
