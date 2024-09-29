import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
import { FiArrowRight } from "react-icons/fi";

const ThirdComponent = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
      }}
    >
      <div className="py-12">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-pink-800"
        >
          Benefits of Using Food <br />
          Booking App
        </motion.h1>
        <div className="text-center my-4"></div>
        <h3 className="d-flex justify-content-center my-4"></h3>
      </div>
    </div>
  );
};

export default ThirdComponent;
