import React from "react";
import { AnimatedText } from "../../../libs/AnimatedText";
import uiux_design from "../../../asets/Images/UI-UX.svg";
import backend_dev from "../../../asets/Images/developer.svg";
import ecoomerce from "../../../asets/Images/ecommerce.png";
import responsive from "../../../asets/Images/responsive.svg";
import payment from "../../../asets/Images/paymentgetway.svg";
import web_redesign from "../../../asets/Images/web_redesign.svg";
import Card from "./Card";

const Third = () => {
  const cardData = [
    {
      image: uiux_design,
      heading: "UI/UX Design",
      description:
        "Uvaan specializes in visually appealing UI/UX design, creating user-friendly interfaces for enhanced satisfaction and engagement.",
    },

    {
      image: backend_dev,
      heading: "Back-end Development",
      description:
        "Crafting smooth data processing with Python, Java, or PHP. We design website functionality, server-side logic, and APIs for peak performance.",
    },

    {
      image: ecoomerce,
      heading: "E-commerce Solutions",
      description:
        "Design intuitive e-commerce platforms for secure payments, catalog browsing, and inventory management to boost sales success.",
    },

    {
      image: responsive,
      heading: "Responsive Web Design",
      description:
        "Uvaan specializes in visually appealing UI/UX design, creating user-friendly interfaces for enhanced satisfaction and engagement.",
    },

    {
      image: payment,
      heading: "Payment Gateway Integration",
      description:
        "Crafting adaptable sites for seamless multi-device experiences: flexible layouts, fluid images, and intuitive navigation.",
    },

    {
      image: web_redesign,
      heading: "Website Redesign and Revamp",
      description:
        "Elevate your online presence through Website Redesign. Emphasize modern design, user experiences, and enhanced functionality.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-indigo-200 to-pink-100 py-6">
      <div className="text-center md:py-20 py-2">
        <h4 className="text-pink-700 uppercase">
          <AnimatedText text="Service" once={false} repeatDelay={1000} />
        </h4>
        <h3 className="text-green-800 text-5xl">Our Services</h3>
        <p className="text-slate-500 font-bolder">
          We think big and have hands in all leading
          <br /> technology platforms to provide you wide array
          <br /> of services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            descriptions={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Third;
