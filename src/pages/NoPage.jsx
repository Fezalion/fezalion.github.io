import { React } from "react";
import { NavLink } from "react-router-dom";

function NoPage() {
  return (
    <>
      <main className="relative z-0 grid w-auto min-h-screen grid-flow-row grid-cols-1 px-8 mx-4 mt-0 md:mx-8 lg:mx-16 animate-pop-in">
        <section className="relative z-0 grid content-center w-auto h-auto min-w-full min-h-screen px-4 mx-auto text-center">
          <h1 className="text-6xl font-extrabold leading-none tracking-tight text-primary-100 md:text-6xl xl:text-6xl">
            404
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            Go back to <NavLink
                    to="/"
                    className="transition-colors text-primary-100 hover:text-secondary-600"
                  >
                    Homepage
                  </NavLink>.
          </p>
        </section>
      </main>
    </>
  );
}

export default NoPage;
