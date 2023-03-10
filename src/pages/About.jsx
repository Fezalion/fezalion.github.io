import React from "react";

import AboutPage from "../components/AboutPage.jsx";

function About() {
  return (
    <>
      <main className="relative z-0 grid w-auto min-h-screen grid-flow-row grid-cols-1 px-8 mx-4 mt-0 md:mx-8 lg:mx-16 animate-pop-in">
        <AboutPage />
      </main>
    </>
  );
}

export default About;
