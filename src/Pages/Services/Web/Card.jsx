import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";

const Card = ({ image, heading, descriptions }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3, 30, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative mx-auto mt-4 w-full max-w-xs flex flex-col items-center justify-center text-center group cursor-pointer"
    >
      <motion.div
        style={{ height: "350px" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 bg-white px-4 py-6 shadow-md rounded-lg transition-transform duration-300 border-2 border-transparent"
      >
        <motion.img
          src={image}
          alt="Card illustration"
          className="mx-auto"
          style={{ height: "90px" }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />

        <motion.h3
          className="text-2xl font-bold mt-4"
          variants={fadeIn("up", 0.4, 20, 0.6)}
        >
          {heading}
        </motion.h3>

        <motion.div
          className="absolute inset-x-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-3/4 mt-2"
          variants={fadeIn("up", 0.6, 10, 0.5)}
        ></motion.div>

        <motion.p
          className="mt-4 text-sm"
          variants={fadeIn("up", 0.8, 20, 0.6)}
        >
          {descriptions}
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0 bg-indigo-100 rounded-lg opacity-0 group-hover:opacity-50"
        transition={{ duration: 0.4 }}
      ></motion.div>
    </motion.div>
  );
};

export default Card;
