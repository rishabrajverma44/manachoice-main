import React from "react";
import { motion } from "framer-motion";
import food from ".././../asets/Images/food.png";
import Example_3Dcard from "../Home/Example_3Dcard";
import { fadeIn } from "../../libs/variants";
const foodEmojis = ["🍕", "🍔", "🍟", "🌭", "🍣", "🍩", "🍿", "🍤"];

const generateFoodIcons = (count) => {
  const foodIcons = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 50 + 20;
    const xStart = Math.random() * 90;
    const yStart = Math.random() * 90;
    const emoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;

    foodIcons.push(
      <motion.div
        key={i}
        className="absolute"
        style={{
          fontSize: `${size}px`,
          top: `${yStart}%`,
          left: `${xStart}%`,
        }}
        animate={{
          x: [0, Math.random() * 10 - 5, Math.random() * 20 - 10, 0],
          y: [0, Math.random() * 10 - 5, Math.random() * 20 - 10, 0],
          opacity: [1, 0.8, 0.6, 1],
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        {emoji}
      </motion.div>
    );
  }
  return foodIcons;
};

const FirstComponents = () => {
  const foodIcons = generateFoodIcons(20);

  return (
    <motion.div
      className="relative w-full flex  justify-center overflow-hidden"
      initial={{ background: "linear-gradient(135deg, #a0c4ff, #d3d3d3)" }}
      animate={{
        background: [
          "linear-gradient(135deg, #a0c4ff, #d3d3d3)",
          "linear-gradient(135deg, #a0a9ff, #bfc9d6)",
          "linear-gradient(135deg, #a0c4ff, #d3d3d3)",
        ],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {foodIcons}
      <div className="relative z-10 mx-auto px-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-2">
          <div className="md:mx-6 p-4 my-12 rounded-lg shadow-lg">
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="md:text-4xl font-bold mb-4"
            >
              Food Booking App
            </motion.h1>
            <p className="mb-6 md:text-xl text-pink-700">
              Your go-to app for hotel owners to showcase and sell their
              delightful dishes!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <motion.ul
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  className="space-y-2"
                >
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">Streamlined Sales</h5>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">User-Friendly Interface</h5>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">Efficient Transaction Process</h5>
                  </li>
                </motion.ul>
              </div>
              <div>
                <motion.ul
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  className="space-y-2"
                >
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">Robust Administrative Tools</h5>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">Real-time Updates</h5>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">➔</span>
                    <h5 className="font-bold">Customization Options</h5>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>

          <div className="px-2">
            <Example_3Dcard image={food} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstComponents;
