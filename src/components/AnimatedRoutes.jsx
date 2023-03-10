import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "../Layout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import NoPage from "../pages/NoPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
