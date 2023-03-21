import React, { Suspense } from "react";
import { Triangle } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));

function Layout() {
  return (
    <div className="relative h-auto min-h-screen">
      <Suspense
        fallback={
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen justify-center bg-primary-600 text-secondary-300">
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
