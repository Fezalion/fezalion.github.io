import { React } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NoPage() {
  return (
    <>
      <motion.main
        className="relative z-0 mx-4 mt-0 grid min-h-screen w-auto grid-flow-row grid-cols-1 px-8 md:mx-8 lg:mx-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="relative z-0 mx-auto grid h-auto min-h-screen w-auto min-w-full content-center px-4 text-center">
          <h1 className="text-6xl font-extrabold leading-none tracking-tight text-primary-100 md:text-6xl xl:text-6xl">
            404
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
            Go back to{" "}
            <NavLink
              to="/"
              className="text-primary-100 transition-colors hover:text-secondary-600"
            >
              Homepage
            </NavLink>
            .
          </p>
        </section>
      </motion.main>
    </>
  );
}

export default NoPage;
