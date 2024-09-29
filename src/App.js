import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useScroll } from "framer-motion";

function App() {
  const router = createBrowserRouter(routes);
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(to right, pink, green)",
        }}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
