import React, { Suspense } from "react";
import { Triangle } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));

function Layout() {
  return (
    <div className="relative h-auto min-h-screen">
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 z-50 flex justify-center w-screen h-screen bg-primary-600 text-secondary-300">
            <span className="flex self-center">
              <Triangle
                height="120"
                width="120"
                color="#ff66ff"
                ariaLabel="triangle-loading"
                wrapperClassName=""
                visible={true}
              />
            </span>
          </div>
        }
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;
