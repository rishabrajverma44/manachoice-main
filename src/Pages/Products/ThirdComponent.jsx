import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
import cost from "../../../src/asets/Images/cost_effective.png";
import visibility from "../../../src/asets/Images/vissibility.png";
import costomers from "../../asets/Images/costomers.png";
import operations from "../../asets/Images/operations.png";
import Centralized from "../../asets/Images/centeralized_processing.png";
import data from "../../asets/Images/data_insites.png";
import innovation from "../../asets/Images/innovation.png";
import convenience from "../../asets/Images/convenience.png";
import CardComponent from "./CardComponent";

const ThirdComponent = () => {
  const cardData = [
    {
      image: cost,
      heading: "Cost-Effective Marketing",
      speed: 0.1,
      loopdelay: 1,
      para: "With the app's reach, hotels can promote their offerings without breaking the bank, a pocket-friendly marketing avenue that yields results.",
    },
    {
      image: visibility,
      heading: "Increased Visibility",
      speed: 0.1,
      loopdelay: 1,
      para: "By being part of this app, hotels can showcase their delicious dishes to a wider audience, helping them stand out in the bustling culinary scene.",
    },
    {
      image: costomers,
      heading: "Expanded Customer Base",
      speed: 0.1,
      loopdelay: 1,
      para: "Embracing the app means opening doors to new customers who may have never discovered the hotel otherwise, broadening the reach.",
    },
    {
      image: operations,
      heading: "Efficient Operations",
      speed: 0.3,
      loopdelay: 1,
      para: "Utilizing the app streamlines order management, making the kitchen and operations run like a well-oiled machine, saving time and effort.",
    },
    {
      image: Centralized,
      heading: "Centralized Control",
      speed: 0.3,
      loopdelay: 1,
      para: "Hotels have the power to manage their profiles, menus, pricing, and promotions all in one place, simplifying the management process.",
    },
    {
      image: data,
      heading: "Data-Driven Insights",
      para: "The app's analytics provide valuable insights into customer preferences, enabling hotels to tailor menus and marketing for a personalized experience.",
      speed: 0.2,
      loopdelay: 1,
    },
    {
      image: innovation,
      heading: "Adaptability and Innovation",
      para: "By joining the app, hotel owners demonstrate their ability to adapt to technological advancements, showcasing innovation in how they reach and serve their customers.",
      speed: 0.5,
      loopdelay: 1,
    },
    {
      image: convenience,
      heading: "Convenience",
      para: "Easily place food orders at your convenience anytime and anywhere. Save time and enjoy a seamless experience with quick order options and easy access to a variety of food choices.",

      speed: 0.3,
      loopdelay: 1,
    },
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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center overflow-hidden"
        >
          <motion.h1
            variants={fadeIn("left", 0.9)}
            className="font-bold text-green-800 mb-2"
          >
            Benefits of Using Food
          </motion.h1>
          <motion.h1
            variants={fadeIn("right", 0.9)}
            className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-pink-800 to-green-800"
          >
            Booking App
          </motion.h1>
        </motion.div>

        <div className="text-center my-4"></div>
        <h3 className="d-flex justify-content-center my-4"></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              heading={card.heading}
              para={card.para}
              speed={card.speed}
              loopDelay={card.loopdelay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
