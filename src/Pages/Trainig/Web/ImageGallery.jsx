import React from "react";
import { motion } from "framer-motion";
import html from "../../../asets/Images/html.webp";
import css from "../../../asets/Images/css.webp";
import js from "../../../asets/Images/JavaScript.png";
import react from "../../../asets/Images/React-icon.svg";
import python from "../../../asets/Images/python.png";
import jquery from "../../../asets/Images/jquery.webp";
import php from "../../../asets/Images/php.webp";
import sql from "../../../asets/Images/sql.png";
import mysql from "../../../asets/Images/mysqli.png";
import bootstrap from "../../../asets/Images/bootstrap.webp";
import { fadeIn } from "../../../libs/variants";

// BrandImages component
const brandImages = [
  html,
  css,
  js,
  python,
  jquery,
  php,
  sql,
  mysql,
  react,
  bootstrap,
];

const ImageGallery = () => {
  return (
    <div className="flex justify-center overflow-hidden p-4">
      <motion.div className="flex flex-wrap justify-center space-x-4 md:space-x-8 md:mx-48 lg:space-x-12">
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
              className="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20 lg:h-22 lg:w-22 rounded-full"
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

export default ImageGallery;
