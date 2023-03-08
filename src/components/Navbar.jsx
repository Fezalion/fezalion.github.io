import { React, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 flex items-start justify-between w-full h-16 p-0 px-16 m-0 border-b-2 group bg-black-500 text-primary-100">
        <div className="flex items-center justify-center w-full h-16 gap-4 px-8 md:justify-start">
          <span className="relative z-20 items-center w-auto">
            Fezalion
            <span className="absolute opacity-0 group-hover:opacity-100 text-[10px] -rotate-[16deg] -left-6 -top-2 z-19 group-hover:scale-125 transform-gpu transition ease-in delay-75 duration-75">
              Vite + React &#9829;
            </span>
          </span>
        </div>

        <section>
          <div className={isNavOpen ? "hidden" : "block"}>
            <div
              className="absolute items-center space-y-2 cursor-pointer md:hidden top-6 right-6"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block w-5 h-0.5 bg-primary-100 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-primary-100 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-primary-100 animate-pulse"></span>
            </div>
          </div>
          <div
            className={isNavOpen ? "flex" : "hidden"}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <svg
              className="absolute items-center w-8 h-8 space-y-2 cursor-pointer md:hidden top-4 right-6 z-32 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <div className={isNavOpen ? "block" : "hidden"}>
            <ul className="flex flex-col items-center justify-start min-h-[50px] pb-2 w-full gap-2 absolute top-[66px] right-0 z-31 border-b-2 md:hidden">
              <li className="cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="items-center justify-end hidden w-auto h-16 gap-6 px-8 md:flex">
          <li className="cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
