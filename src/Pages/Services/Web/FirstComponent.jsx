import React from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiStar,
  FiUsers,
  FiSmartphone,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";

const FirstComponent = () => {
  return (
    <div className="bg-gradient-to-r from-violet-300 to-fuchsia-500">
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#317347" }}
            >
              Web Design And Development Services in Bangalore
            </h1>
            <p className="text-lg text-gray-600">
              Delivering Premium Websites at Affordable Prices.
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
              Grow Your Business Online!
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
                Contact Now
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
  );
};

export default FirstComponent;
