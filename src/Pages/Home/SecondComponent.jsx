import React from "react";
import web from "../../../src/asets/Images/web-dev.png";
import ecommerce from "../../../src/asets/Images/ecommerce.png";
import mobile from "../../../src/asets/Images/mobile.png";
import market from "../../asets/Images/social-media-marketing-new.png";
import trainding from "../../asets/Images/traind.png";
import CardComponent from "./CardComponent";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
const SecondComponent = () => {
  const cardData = [
    {
      image: web,
      heading: "Web Development",
      para: "Having a website in todays world is a major gamechanger if you run a business. So, do you have one?",
    },
    {
      image: ecommerce,
      heading: "Ecommerce Development",
      para: "E-commerce gives businesses another means of reaching more customers and thus improving overall business success. We'll help you identify solutions that fit your needs.",
    },
    {
      image: mobile,
      heading: "Mobile App Development",
      para: "The world today revolves around the mobile phone. So having an app to represent your business on mobile creates an ever growing market for your product or service.",
    },
    {
      image: trainding,
      heading: "Trending Technologies",
      para: "Our designers will craft stunning and striking responsive website so that your websites standout amongst the crowd.",
    },
    {
      image: market,
      heading: "Digital Marketing ",
      para: "We’re masters of our craft, focusing on Branding, Digital Marketing, Website Design Solutions, App Development & Advertisement.",
    },
  ];
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
        }}
        className="py-8"
      >
        <article className="text-center text-pretty">
          <motion.h5
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold my-6"
          >
            <span className="text-pink-600">manaChoice</span>
            <span className="text-green-800">
              {" "}
              TechWork (OPC) Pvt. Ltd.
              <br></br> Provides The Best Software for Your <br></br>Business
            </span>
          </motion.h5>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="my-12 font-semibold"
          >
            manaChoice TechWork (OPC) Pvt. Ltd. is a leading provider of
            software solutions for businesses of all sizes. Our software is
            designed
            <br></br> to help businesses improve their efficiency, productivity,
            and profitability.
          </motion.div>
        </article>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              heading={card.heading}
              para={card.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
