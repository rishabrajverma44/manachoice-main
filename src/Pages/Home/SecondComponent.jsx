import React, { useState } from "react";
import web from "../../../src/asets/Images/web-dev.png";
import mobile from "../../../src/asets/Images/mobile.png";
import market from "../../asets/Images/social-media-marketing-new.png";
import trainding from "../../asets/Images/traind.png";
import CardComponent from "./CardComponent";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
const SecondComponent = () => {
  const cardData = [
    { image: web, text: "Paragraph 1" },
    { image: mobile, text: "Paragraph 2" },
    { image: market, text: "Paragraph 3" },
    { image: trainding, text: "Paragraph 4" },
    { image: web, text: "Paragraph 5" },
    { image: trainding, text: "Paragraph 6" },
  ];
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
        }}
        className="py-12"
      >
        <article className="text-center text-pretty">
          <motion.h5
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold my-6"
          >
            <span className="text-pink-600">Uvaan</span>
            <span className="text-blue-950">
              {" "}
              Infotech
              <br></br> Provides The Best Software for Your <br></br>Business
            </span>
          </motion.h5>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="my-12"
          >
            Uvaan Infotech is a leading provider of software solutions for
            businesses of all sizes. Our software is designed<br></br> to help
            businesses improve their efficiency, productivity, and
            profitability.
          </motion.div>
        </article>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
          {cardData.map((card, index) => (
            <CardComponent key={index} image={card.image} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
