import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
import { FiArrowRight } from "react-icons/fi";
import web from "../../../src/asets/Images/web-dev.png";
import mobile from "../../../src/asets/Images/mobile.png";
import market from "../../asets/Images/social-media-marketing-new.png";
import trainding from "../../asets/Images/traind.png";
import Card from "./Card";

const ThirdComponent = () => {
  const cardData = [
    { image: web, text: "Paragraph 1" },
    { image: mobile, text: "Paragraph 2" },
    { image: market, text: "Paragraph 3" },
    { image: trainding, text: "Paragraph 4" },
    { image: web, text: "Paragraph 5" },
    { image: trainding, text: "Paragraph 6" },
  ];

  const colors = [
    "#FFF7D1",
    "#FFECC8",
    "#FFD09B",
    "#FCDE70",
    "#E8B86D",
    "#E7CCCC",
  ];
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
          className="bg-clip-text text-center text-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          Benefits of Using Food <br />
          Booking App
        </motion.h1>
        <div className="text-center my-4"></div>
        <h3 className="d-flex justify-content-center my-4"></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              text={card.text}
              color={colors[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
