import React from "react";
import food_app_booking from "../../asets/Images/food1_app_booking.png";
import anroid from "../../asets/Images/android.png";
import iphone from "../../asets/Images/iphone.png";
import window from "../../asets/Images/windows.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";
import { AnimatedText } from "../../libs/AnimatedText";

const Fith = () => {
  const benifites = [
    { title: "Efficient Order Handling" },
    { title: "Secure Transactions" },
    { title: "Secure, Scalable, And Well Supported" },
    { title: "Cloud Hosted" },
    { title: "Reliable Support" },
    { title: "Robust Methodology & Security" },
    { title: "Value For Money Solution" },
    { title: "Completely Configurable & Customizable" },
  ];

  return (
    <div className="md:px-8 py-4 md:py-10 overflow-x-hidden">
      <h1 className="text-pink-800 font-bold text-center">
        <AnimatedText
          text="Why Food Booking App"
          className="text-2xl md:text-6xl font-bold"
          once={false}
          repeatDelay={2000}
        />
      </h1>
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
          <div className="bg-white flex items-center p-2 m-2 border rounded-lg">
            <img src={food_app_booking} alt="food" className="w-full h-auto" />{" "}
          </div>
          <div className="bg-white p-2 m-2 border rounded-lg">
            <ul>
              {benifites.map((benifite, index) => (
                <li key={index}>
                  <motion.h5
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex items-center px-0 leading-tight m-0"
                  >
                    <span>
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 33 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 14.5001L4.5 12.5001L6.5 14.5L8.5 12.5001L10.5 14.5001L12.5 12.5"
                          stroke="#55A76A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7L6 10L12.5 3.5"
                          stroke="#55A76A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="cursor-pointer p-0 m-0 ml-2">
                      {benifite.title}
                    </p>
                  </motion.h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 overflow-hidden">
        <div className="flex space-x-8">
          <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
            <img
              src={anroid}
              alt="Android"
              className="rounded-full w-full h-full object-cover"
            />
          </span>
          <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
            <img
              src={iphone}
              alt="iPhone"
              className="w-full h-full object-cover rounded-full"
            />
          </span>
          <span className="cursor-pointer p-3 w-20 h-20 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
            <img
              src={window}
              alt="Windows"
              className="w-full h-full object-cover rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fith;
