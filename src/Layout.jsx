import React, { Suspense, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));

function Layout() {
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  useEffect(() => {
    var clientX = 1024, clientY = 0;
    var newX = 1024, newY = 0;
    const updateMousePos = (ev) => {
      clientX = ev.clientX;
      clientY = ev.clientY;
    };

    var interval = setInterval(() => {
      newX = lerp(newX, clientX, 0.2);
      newY = lerp(newY, clientY, 0.2);
      document.documentElement.style.setProperty("--x", `${newX}px`);
      document.documentElement.style.setProperty("--y", `${newY}px`);
    }, 1000 / 30);

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      clearInterval(interval);
    };
  }, []);

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
