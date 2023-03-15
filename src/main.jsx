import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import AnimatedRoutes from "./pages/AnimatedRoutes";

export default function App() {
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  useEffect(() => {
    var clientX = 0, clientY = 0;
    var newX = 0, newY = 0;
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
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
