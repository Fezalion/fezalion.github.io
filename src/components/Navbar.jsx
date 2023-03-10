import { React } from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  const activeLinkStyle =
    "transition-colors text-secondary-300 hover:text-secondary-600";
  const normalLinkStyle =
    "transition-colors text-primary-100 hover:text-secondary-600";

  return (
    <>
      <header>
        <nav className="border-b border-secondary-700 px-4 lg:px-6 py-2.5 bg-primary-500 fixed top-0 left-0 w-full z-40">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <a href="#" className="flex items-center">
              <img
                src="https://placehold.jp/3d4070/ffffff/60x60.png"
                className="h-6 mr-3 sm:h-9"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-100">
                Fezalion
              </span>
            </a>

            <div className="flex items-center lg:order-2">
              <a
                href="https://github.com/fezalion/"
                className="px-2 py-2 mr-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 lg:px-2 lg:py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="px-2 py-2 mr-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 lg:px-2 lg:py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center lg:w-auto lg:order-1">
              <ul className="flex flex-row px-2 py-2 mr-2 space-x-8 text-xs rounded-lg bg-primary-700 lg:text-base lg:bg-transparent lg:rounded-none lg:font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                <li className="cursor-pointer ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
