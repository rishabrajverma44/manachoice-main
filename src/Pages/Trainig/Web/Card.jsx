import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";
const Card = ({ image, heading }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2, 30, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="relative mx-auto mt-2 w-full max-w-xs flex flex-col items-center justify-center text-center group cursor-pointer"
    >
      <motion.div
        style={{ height: "300px" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 bg-white px-4 py-6 shadow-md rounded-lg transition-transform duration-300 border-2 border-transparent"
      >
        <motion.img
          src={image}
          alt={heading}
          className="mx-auto"
          style={{ height: "180px" }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <motion.h3
          className="text-xl font-bold mt-2"
          variants={fadeIn("up", 0.4, 20, 0.6)}
        >
          {heading}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default Card;
