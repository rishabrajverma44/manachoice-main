import React, { useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiUsers,
  FiSmartphone,
  FiUser,
  FiCreditCard,
  FiCheckCircle,
} from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";
import LogoTyping from "../../../libs/LogoTyping";

const First = () => {
  const [hotelOwnersAdvantages] = useState([
    {
      title: "HTML ( Hypertext Markup Language )",
      description:
        "HTML is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.",
    },
    {
      title: "CSS ( Cascading Style Sheets )",
      description:
        "CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
      title: "React",
      description:
        "To act in a reverse direction or manner, especially so as to return to a prior condition.",
    },
    {
      title: "Javascript",
      description:
        "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    },
    {
      title: "Ajax",
      description:
        "AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script. Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.",
    },
    {
      title: "JQuery",
      description:
        "jQuery is an open-sourced JavaScript library that simplifies creation and navigation of web applications.",
    },
  ]);

  const [backendDevelopment] = useState([
    {
      title: "PHP",
      description:
        "PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.",
    },
    {
      title: "Java",
      description:
        "Java is a commonly used language for web development, especially on the server-side. Java web applications are distributed applications that run on the internet.",
    },
    {
      title: "Python",
      description:
        "Python's role in web development can include sending data to and from servers, processing data and communicating with databases, URL routing, and ensuring security.",
    },
    {
      title: "Node JS",
      description:
        "Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript.",
    },
    {
      title: "ExpressJS",
      description:
        "Express is a node js web application framework that provides broad features for building web and mobile applications.",
    },
    {
      title: "SQL",
      description:
        "SQL is a programming language used to communicate with and manipulate databases.",
    },
  ]);

  const [openLeftIndex, setOpenLeftIndex] = useState(null);

  // State for the right column
  const [openRightIndex, setOpenRightIndex] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-200 to-fuchsia-200">
        <div className="container mx-auto py-12 px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h1
                className="text-3xl font-bold mb-4"
                style={{ color: "#317347" }}
              >
                <span>Full Stack Web Development</span>
                <br></br>
                <LogoTyping text="Training Course in Bangalore " />
              </h1>
              <p className="text-lg text-gray-600">
                Delivering Premium Websites at Affordable Prices.Kick start your
                web career. Join our course and build the future of the
                internet.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-2 text-gray-600 mr-2">
                <div>
                  <p className="mb-2 flex items-center">
                    <FiBriefcase className="text-lg text-indigo-600 mr-2" />
                    100% Placement Support
                  </p>
                  <p className="mb-2 flex items-center">
                    <FiClock className="text-lg text-indigo-600 mr-2" />
                    5-10 Live Projects
                  </p>
                  <p className="mb-2 flex items-center">
                    <FiCreditCard className="text-lg text-indigo-600 mr-2" />
                    Money Back Guarantee
                  </p>
                </div>
                <div>
                  <p className="mb-2 flex items-center">
                    <FiUsers className="text-lg text-indigo-600 mr-2" />
                    Get Trained By Industry Experts
                  </p>
                  <p className="mb-2 flex items-center">
                    <FiSmartphone className="text-lg text-indigo-600 mr-2" />
                    Hands on Learning
                  </p>
                  <p className="mb-2 flex items-center">
                    <FaMoneyBillWave className="text-lg text-indigo-600 mr-2" />
                    Affordable Fees
                  </p>
                </div>
              </div>
              <h5 className="text-xl text-gray-800 mt-8 mb-4 font-semibold">
                Next Batch starts this Monday. Hurry and book your seat!
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
                <button class="cursor-pointer bg-white px-3 py-2 rounded-full text-bg-blue-500 tracking-wider shadow-xl animate-bounce hover:animate-none">
                  <svg
                    class="w-5 h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
                <span className="text-slate-600">Download Brochure</span>
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

      <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-8">
        <h2 className="text-center py-4 my-4 text-slate-900 text-4xl font-bold">
          Skills Covered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Front End Development
            </h3>
            <ul className="space-y-4">
              {hotelOwnersAdvantages.map((item, index) => (
                <li key={index}>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h5
                      className="cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
                      role="button"
                      tabIndex={0}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <circle cx="14" cy="14" r="12" fill="#55A76A" />
                        <path
                          d="M20 10.5L12.5 18L8.5 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item.title}
                    </h5>
                    {openIndex === index && (
                      <p className="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-2 px-4 text-gray-700 transition-opacity duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Back End Development
            </h3>
            <ul className="space-y-4">
              {backendDevelopment.map((item, index) => (
                <li key={index}>
                  <div
                    className="relative"
                    onMouseEnter={() =>
                      handleMouseEnter(index + hotelOwnersAdvantages.length)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <h5
                      className="cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 flex items-center"
                      role="button"
                      tabIndex={0}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <circle cx="14" cy="14" r="12" fill="#55A76A" />
                        <path
                          d="M20 10.5L12.5 18L8.5 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item.title}
                    </h5>
                    {openIndex === index + hotelOwnersAdvantages.length && (
                      <p className="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-2 px-4 text-gray-700 transition-opacity duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
