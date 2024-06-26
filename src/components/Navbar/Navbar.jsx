import { React } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLinkStyle =
    "transition-colors text-secondary-300 hover:text-secondary-600";
  const normalLinkStyle =
    "transition-colors text-primary-100 hover:text-secondary-600";

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-40 h-16 w-auto min-w-full border-b border-secondary-700 bg-primary-700 px-4 py-4 sm:py-2.5">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <NavLink to="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-primary-100">
                Fezalion
              </span>
            </NavLink>

            <div className="order-2 hidden items-center sm:flex">
              <a
                href="https://github.com/fezalion/"
                target="_blank"
                className="mr-2 rounded-lg px-2 py-2 text-sm font-medium text-white lg:px-2 lg:py-2"
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
                href="https://www.youtube.com/channel/UC37naG7PQg393xMT34i1wZg"
                target="_blank"
                className="mr-2 rounded-lg px-2 py-2 text-sm font-medium text-white lg:px-2 lg:py-2"
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

            <div className="order-1 flex h-full w-auto items-center">
              <ul className="mr-2 flex flex-row space-x-4 bg-primary-700 px-2 text-xs sm:space-x-8 lg:mt-0 lg:bg-transparent lg:text-base lg:font-medium">
                <li className="cursor-pointer">
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
                    to="/gallery"
                    className={({ isActive }) =>
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    Music
                  </NavLink>
                </li>
                <li className="cursor-pointer ">
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    Projects
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
                <li className="cursor-pointer">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    Contact
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
