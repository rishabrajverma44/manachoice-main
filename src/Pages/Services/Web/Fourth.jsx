import React from "react";
import style from "../../globlecss.module.css";
import process_1 from "../../../asets/Images/process-1.jpg";
import why1 from "../../../asets/Images/why1.jpg";
import why2 from "../../../asets/Images/why2.jpg";
import why3 from "../../../asets/Images/why3.jpg";
import why4 from "../../../asets/Images/why4.jpg";
import why5 from "../../../asets/Images/why5.jpg";
import why6 from "../../../asets/Images/why6.jpg";
import Card from "./Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";
import { FaPhone } from "react-icons/fa";

const Fourth = () => {
  const cardData = [
    {
      image: why1,
      heading: "Best Return On Investment",
      description:
        "Uvaan specializes in visually appealing UI/UX design, creating user-friendly interfaces for enhanced satisfaction and engagement.",
    },

    {
      image: why2,
      heading: "Client-Location Work/Development",
      description:
        "Crafting smooth data processing with Python, Java, or PHP. We design website functionality, server-side logic, and APIs for peak performance.",
    },

    {
      image: why3,
      heading: "Client-Centric Service",
      description:
        "Design intuitive e-commerce platforms for secure payments, catalog browsing, and inventory management to boost sales success.",
    },

    {
      image: why4,
      heading: "Responsive Web Design",
      description:
        "Uvaan specializes in visually appealing UI/UX design, creating user-friendly interfaces for enhanced satisfaction and engagement.",
    },

    {
      image: why5,
      heading: "Cutting-Edge Technologies",
      description:
        "Crafting adaptable sites for seamless multi-device experiences: flexible layouts, fluid images, and intuitive navigation.",
    },

    {
      image: why6,
      heading: "Certified Professionals",
      description:
        "Elevate your online presence through Website Redesign. Emphasize modern design, user experiences, and enhanced functionality.",
    },
  ];
  return (
    <div>
      <div className="text-center md:py-12">
        <h1 className="text-pink-800 text-2xl uppercase">Process</h1>
        <h3 className="text-slate-800 text-4xl">Our Development Process</h3>
        <p className="text-slate-500 font-bolder">
          Our design process follows a proven approach. We begin with a deep
          understanding
          <br />
          of your needs and create a planning template.
        </p>
      </div>
      <>
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-7 md:px-24 gap-4 m-2">
            <div className="col-span-1 md:col-span-2 px-2">
              <img
                src={process_1}
                style={{ height: "360px" }}
                className="border-1 border-purple-600 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                alt="process_1"
              />
            </div>
            <div className="col-span-1 md:col-span-5 px-2 flex flex-col justify-center items-center">
              <div className="px-4">
                <div className={style.spinnerContainer}>
                  <div className={style.waterDrop}></div>
                  <div className={style.number}>1</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-slate-800 text-4xl">
                  Requirement Gathering
                </h3>
                <p className="text-slate-500 font-bolder">
                  During "Requirement Gathering," we thoroughly understand your
                  needs
                  <br /> and objectives to lay the foundation for a tailored and
                  successful project.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:px-24 gap-4 m-2">
            <div className="col-span-1 md:col-span-5 px-2 flex flex-col justify-center items-center">
              <div className="px-4">
                <div className={style.spinnerContainer}>
                  <div className={style.waterDrop}></div>
                  <div className={style.number}>2</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-slate-800 text-4xl">Prototype</h3>
                <p className="text-slate-500 font-bolder">
                  In the "Prototype" phase, we create a working model of your
                  project to
                  <br /> visualize its functionality and design before moving to
                  full development.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 px-2">
              <img
                src={process_1}
                style={{ height: "360px" }}
                className="border-1 border-purple-600 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                alt="process_1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:px-24 gap-4 m-2">
            <div className="col-span-1 md:col-span-2 px-2">
              <img
                src={process_1}
                style={{ height: "360px" }}
                className="border-1 border-purple-600 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                alt="process_1"
              />
            </div>
            <div className="col-span-1 md:col-span-5 px-2 flex flex-col justify-center items-center">
              <div className="px-4">
                <div className={style.spinnerContainer}>
                  <div className={style.waterDrop}></div>
                  <div className={style.number}>3</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-slate-800 text-4xl">
                  Develop & Deployment
                </h3>
                <p className="text-slate-500 font-bolder">
                  In the "Develop & Deployment" phase, we build and launch your
                  project, <br />
                  ensuring a smooth transition from development to the live
                  environment.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:px-24 gap-4 m-2">
            <div className="col-span-1 md:col-span-5 px-2 flex flex-col justify-center items-center">
              <div className="px-4">
                <div className={style.spinnerContainer}>
                  <div className={style.waterDrop}></div>
                  <div className={style.number}>4</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-slate-800 text-4xl">
                  Support & Maintenance
                </h3>
                <p className="text-slate-500 font-bolder">
                  In the "Support & Maintenance" phase, we provide ongoing
                  assistance and
                  <br /> updates to ensure your project remains secure and
                  optimized for peak <br />
                  performance.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 px-2">
              <img
                src={process_1}
                style={{ height: "360px" }}
                className="border-1 border-purple-600 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                alt="process_1"
              />
            </div>
          </div>
        </div>
      </>
      <>
        <div className="bg-gradient-to-b from-pink-200 to-white-100 md:py-12">
          <div className="text-center">
            <h1 className="text-pink-800 text-2xl uppercase">
              We Deliver Our Best
            </h1>
            <h3 className="text-slate-800 text-4xl">Why Choose Uvaan?</h3>
          </div>
          <div>
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
        </div>
      </>
      <>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
          }}
        >
          <div className="py-12">
            <h5 className="text-center text-pink-800 uppercase text-lg">
              Let's work together
            </h5>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center"
            >
              We would love to hear your <br />
              Requirements
            </motion.h1>
            <div className="d-flex justify-content-center aling-item-center my-4">
              <button className={style.Btn}>Enquiry Now</button>
            </div>
            <h3 className="d-flex justify-content-center my-4">
              <span className="mt-2 mx-2">
                <FaPhone size={24} className="text-current" />
              </span>
              <span> +9304746833</span>
            </h3>
          </div>
        </div>
      </>
    </div>
  );
};

export default Fourth;
