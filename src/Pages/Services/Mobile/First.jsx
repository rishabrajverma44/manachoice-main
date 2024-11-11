import React from "react";
import app_developer from "../../../asets/Images/app-develops.png";
import android from "../../../asets/Images/anroid.svg";
import ecommerce from "../../../asets/Images/ecommerce.png";
import Maintenance from "../../../asets/Images/maintenance.svg";
import advance from "../../../asets/Images/advanced.svg";
import payment from "../../../asets/Images/paymentgetway.svg";
import Redesign from "../../../asets/Images/design_mobile.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";
import Card from "../Web/Card";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiSmartphone,
  FiStar,
  FiUser,
  FiUsers,
  FiCheck,
} from "react-icons/fi";
import LogoTyping from "../../../libs/LogoTyping";

const First = () => {
  const cardData = [
    {
      image: android,
      heading: "Android App Development",
      description:
        "Building feature-rich Android apps in Java or Kotlin for phones and tablets, delivering top performance and user experience.",
    },

    {
      image: ecommerce,
      heading: "E-Commerce Apps",
      description:
        "E-Commerce App Development: User-friendly interfaces, secure transactions, increased sales.",
    },

    {
      image: Maintenance,
      heading: "App Maintenance & Testing",
      description:
        "We guarantee smooth app performance: regular updates, testing, and bug fixes for a delightful user experience.",
    },

    {
      image: advance,
      heading: "Implementing Advanced App Features",
      description:
        "Developing sophisticated app features to enhance functionality and user experience.",
    },

    {
      image: payment,
      heading: "Payment Gateway Integration",
      description:
        "Integrating secure payment gateways for smooth transactions and customer data protection in your app.",
    },

    {
      image: Redesign,
      heading: "App Redesign and Revamp",
      description:
        "Refresh your app with modern aesthetics and enhanced functionality. Boost user engagement and growth with App Redesign service.",
    },
  ];

  const sentence = [
    "Substitution of Traditional Market Methods",
    "Enhanced Customer Value",
    "Effective Branding and Audience Engagement",
    "24/7 Support and Accessibility",
    "Cost Reduction and Improved Standards",
    "Feasible and Convenient Solutions",
    "Increased Revenue Opportunities",
    "Robust Security against Vulnerabilities",
  ];
  return (
    <div className="mb-6">
      <>
        <div className="bg-gradient-to-r from-violet-200 to-fuchsia-200">
          <div className="container mx-auto py-12 px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h1
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#317347" }}
                >
                  <span>Mobile App Development</span>
                  <br></br>
                  <LogoTyping text="Services in Bangalore " />
                </h1>
                <p className="text-lg text-gray-600">
                  Premium Quality mobile apps that exceed your expectations.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-2 text-gray-600">
                  <div>
                    <p className="mb-2 flex items-center">
                      <FiBriefcase className="text-lg text-indigo-600" />
                      &nbsp;Client-Location Development
                    </p>
                    <p className="mb-2 flex items-center">
                      <FiClock className="text-lg text-indigo-600" />
                      &nbsp;On-Time Project Deliveries
                    </p>
                    <p className="mb-2 flex items-center">
                      <FiStar className="text-lg text-indigo-600" />
                      &nbsp;Premium Quality
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 flex items-center">
                      <FiUsers className="text-lg text-indigo-600" />
                      &nbsp;Reliable Support Team
                    </p>
                    <p className="mb-2 flex items-center">
                      <FiSmartphone className="text-lg text-indigo-600" />
                      &nbsp;Responsive for All Devices
                    </p>
                    <p className="mb-2 flex items-center">
                      <FiUser className="text-lg text-indigo-600" />
                      &nbsp;Expert Development Team
                    </p>
                  </div>
                </div>
                <h5 className="text-xl text-gray-800 mt-8 mb-4 font-semibold">
                  Get YourApp Now!!
                </h5>
                <div className="flex gap-4 items-center">
                  <motion.button
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.9 }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className="group bg-indigo-600 hover:bg-indigo-700 relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                  >
                    Enquiry Now
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                  </motion.button>
                </div>
              </div>

              <div className="form-block bg-white shadow-lg rounded-xl p-8">
                <h5 className="text-2xl font-semibold text-gray-800 mb-6">
                  Contact Our Experts Today!
                </h5>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mobile
                      </label>
                      <input
                        type="number"
                        id="mobile"
                        placeholder="Enter Mobile"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="form-group relative">
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Service
                      </label>
                      <select
                        id="service"
                        className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-indigo-800 transition ease-in-out duration-500"
                      >
                        <option value="" className="text-black">
                          Select Service
                        </option>
                        <option value="Web designing" className="text-black">
                          Web Designing
                        </option>
                        <option value="Web Development" className="text-black">
                          Web Development
                        </option>
                        <option
                          value="Full Stack Web Development"
                          className="text-black"
                        >
                          Full Stack Web Development
                        </option>
                        <option
                          value="MERN Stack Development"
                          className="text-black"
                        >
                          MERN Stack Development
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter Your Message"
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="bg-gradient-to-b from-pink-50 to-white-100 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-7 md:px-24 gap-4 m-2">
            <div className="col-span-1 md:col-span-2 px-2">
              <img
                src={app_developer}
                style={{ height: "360px" }}
                className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
                alt="process_1"
              />
            </div>
            <div className="col-span-1 md:col-span-5 px-2 flex flex-col justify-center items-start">
              <h5 className="text-pink-900 text-xl uppercase">Overview</h5>
              <h2 className="text-slate-900 text-4xl font-semibold">
                Customized Mobile App
                <br /> Solutions
              </h2>
              <p className="text-slate-500 font-bolder">
                We create outstanding apps that boost your online presence and
                drive business growth. With a dedicated team of experts, we
                ensure seamless user experiences and innovative features.
              </p>
              <p className="text-slate-500 font-bolder">
                Make a remarkable impression on your audience and stand above
                the competition with a unique and lasting impact.. Contact us
                now to begin your mobile app journey!
              </p>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="bg-gradient-to-b from-blue-200 to-pink-200 md:py-12">
          <div className="text-center">
            <h1 className="text-pink-800 text-2xl uppercase">Service</h1>
            <h1 className="text-slate-800 text-5xl">Our Services</h1>
            <p className="text-lg text-gray-600">
              We think big and have hands in all leading <br /> technology
              platforms to provide you wide array <br />
              of services.
            </p>
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
        <div>
          <h1 className="text-slate-800 text-3xl text-center font-bold my-2">
            Advantages of Mobile App
          </h1>
        </div>
        <div className="md:pl-48">
          <div className="grid gap-4 md:grid-cols-2">
            {sentence.map((text, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="flex flex-row">
                    <span className="bg-green-300 border border-green-500 rounded-full p-1">
                      <FiCheck className="text-green-800 text-xl" />
                    </span>
                    <span className="text-gray-700 ml-2">{text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export default First;
