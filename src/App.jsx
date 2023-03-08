import React, { Suspense } from "react";
import { Triangle } from "react-loader-spinner";

const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
const Home = React.lazy(() => import("./pages/Home.jsx"));

function App() {
  return (
    <div className="relative h-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 ">
      <Suspense fallback={<div className="z-50 flex justify-center w-screen h-screen fixed top-0 left-0 bg-primary-600 text-center text-secondary-300 animate-pop-out">
          <span className="flex self-center">
            <Triangle
              height="120"
              width="120"
              ariaLabel="triangle-loading"
              wrapperClassName=""
              visible={true}
              className="text-secondary-300"
            />
          </span>
        </div>}>        
        <Navbar />
        <Home />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
