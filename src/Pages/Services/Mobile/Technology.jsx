import React from "react";
import { motion } from "framer-motion";
import fluter from "../../../asets/Images/flutter.webp";
import atom from "../../../asets/Images/atom.webp";
import anroid from "../../../asets/Images/android.png";
import vscode from "../../../asets/Images/vscode1.webp";
import dart from "../../../asets/Images/dart1.webp";
import css from "../../../asets/Images/css.png";
import { fadeIn } from "../../../libs/variants";

// BrandImages component
const brandImages = [fluter, atom, anroid, vscode, dart, css];

const Technology = () => {
  return (
    <>
      <div>
        <div className="text-center py-12">
          <h1 className="text-slate-900 font-bold">Technologies Used</h1>
        </div>
        <div className="flex justify-center overflow-hidden">
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
      </div>
    </>
  );
};

export default Technology;
