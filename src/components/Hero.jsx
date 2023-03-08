import { React, useState } from "react";

function Hero() {
  return (
    <>
      <section className="z-0 h-auto max-w-screen-xl px-4 mx-auto text-center lg:min-h-screen lg:pb-8 lg:py-16 lg:px-12">
        <h1 class="mb-4 mt-32 lg:mt-64 text-4xl font-extrabold tracking-tight leading-none text-primary-100 md:text-4xl xl:text-6xl animate-pop-in">
          Hello, I'm <span className="text-secondary-500">Fezalion</span>
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 animate-pop-in">
            I make coffee into code.
        </p>
      </section>
    </>
  );
}

export default Hero;
