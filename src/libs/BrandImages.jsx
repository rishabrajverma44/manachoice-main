import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import react from "../asets/Images/React-icon.svg";
import js from "../asets/Images/JavaScript.png";
import python from "../asets/Images/python.png";
import node from "../asets/Images/modejs.png";
import druepal from "../asets/Images/druepal.png";
import word_press from "../asets/Images/word-press.png";

// BrandImages component
const brandImages = [react, js, python, node, druepal, word_press];

const BrandImages = () => {
  return (
    <div className="flex justify-center overflow-hidden p-4">
      <motion.div className="flex flex-wrap justify-center space-x-4 md:space-x-8 lg:space-x-12">
        {brandImages.map((image, index) => (
          <span
            key={index}
            className="cursor-pointer rounded-full p-2 shadow-inner border-3 border-green-600 
              transition-transform transform hover:scale-105  my-2
              hover:shadow-lg"
          >
            <motion.img
              src={image}
              alt={`Brand ${index + 1}`}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full"
              variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.2)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.1, rotate: 10 }}
              viewport={{ once: false, amount: 0.7 }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandImages;
