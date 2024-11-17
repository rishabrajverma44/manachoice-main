import React from "react";
import ImageGallery from "./ImageGallery";
import { AnimatedText } from "./AnimatedText";
import {
  FaCalendarAlt,
  FaProjectDiagram,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  FaUserCheck,
  FaCompass,
  FaBriefcase,
  FaCreditCard,
  FaCertificate,
} from "react-icons/fa";
import style from "../../globlecss.module.css";
import student from "../../../asets/Images/student.webp";
import fresher from "../../../asets/Images/undraw_Teacher_re_sico.png";
import Professional from "../../../asets/Images/undraw_feeling_proud_qne1.png";
import webDev from "../../../asets/Images/web-dev.png";
import programming from "../../../asets/Images/undraw_programming_re_kg9v.svg";
import blog from "../../../asets/Images/undraw_blogging_re_kl0d.svg";
import programers from "../../../asets/Images/undraw_engineering_team_a7n2.svg";

import Card from "./Card";

const Second = () => {
  const cardData = [
    {
      image: fresher,
      heading:
        "Freshers / Final year Students looking forward to building a career in IT",
    },
    {
      image: Professional,
      heading: "IT Professionals Seeking Career Change",
    },
    {
      image: webDev,
      heading: "Aspiring Web Developers",
    },
    {
      image: programming,
      heading: "Passionate Programmers, Freelancers and Consultants",
    },
    {
      image: blog,
      heading: "Business Owners and Bloggers",
    },
    {
      image: programers,
      heading: "Programming Professionals",
    },
  ];
  return (
    <div>
      <div className="bg-gray-100 text-center md:p-3">
        <ImageGallery />
        <div className="text-center my-12">
          <h2>Ready to become a Full Stack Developer?</h2>
          <h3 className="font-sans text-slate-9">
            <AnimatedText
              text="best in the industry with hands-on experience"
              once={false}
              repeatDelay={1000}
            />
          </h3>
          <div className="d-flex justify-content-center aling-item-center my-4">
            <button className={style.Btn} style={{ marginBottom: "30px" }}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <>
        <div>
          <div className="p-2 md:my-12">
            <h2 className="text-center text-slate-800">
              Key Features of the Program
            </h2>
            <div className="md:flex justify-center items-center text-center ml-4">
              <div className="w-100 md:w-1/2 flex flex-col items-start justify-center md:pl-48">
                <span className="flex items-center mt-2">
                  <FaCalendarAlt className="mr-2 text-blue-500" /> 3-6 Months of
                  Applied Learning
                </span>
                <span className="flex items-center mt-2">
                  <FaProjectDiagram className="mr-2 text-green-500" /> 5-10 Live
                  Projects
                </span>
                <span className="flex items-center mt-2">
                  <FaHandsHelping className="mr-2 text-yellow-500" /> 100%
                  Placement Assistance
                </span>
                <span className="flex items-center mt-2">
                  <FaChalkboardTeacher className="mr-2 text-purple-500" /> Learn
                  from Industry Experts
                </span>
                <span className="flex items-center mt-2">
                  <FaMoneyBillWave className="mr-2 text-red-500" /> Money Back
                  Guarantee
                </span>
              </div>

              <div className="w-100 md:w-1/2 flex flex-col items-start justify-center md:pl-4">
                <span className="flex items-center mt-2">
                  <FaUserCheck className="mr-2 text-blue-500" /> 1:1 Mock
                  Interview
                </span>
                <span className="flex items-center mt-2">
                  <FaCompass className="mr-2 text-green-500" /> Career Guidance
                  and Portfolio Building
                </span>
                <span className="flex items-center mt-2">
                  <FaBriefcase className="mr-2 text-yellow-500" />
                  Designed for Working Professionals and Freshers
                </span>
                <span className="flex items-center mt-2">
                  <FaCreditCard className="mr-2 text-purple-500" /> No-cost EMI
                  options
                </span>
                <span className="flex items-center mt-2">
                  <FaCertificate className="mr-2 text-red-500" /> Internship
                  Certificates
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:p-12">
            <div className="md:w-1/3">
              <img src={student} alt="learning_img" className="w-full" />
            </div>
            <div className="md:w-2/3 md:pl-8 md:px-12 md:mt-12 px-2">
              <h2 className="text-3xl font-bold mb-4">
                Website Design and Development Program
              </h2>
              <div className="ml-4">
                <p className="mb-4">
                  Uvaan's Website Development Training offers an exceptional
                  Full Stack Web development course designed to take your skills
                  to the next level.
                </p>
                <p className="mb-4">
                  Whether you're a seasoned programmer looking to enhance your
                  knowledge or a beginner eager to dive into the exciting world
                  of web development, our comprehensive course has you covered.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:mt-6">
                <div className="md:w-2/3 mb-4 md:mb-0">
                  <span className="block text-lg text-blue-800 font-bold">
                    Invest In Your Career Fearlessly!
                  </span>
                  <span className="block text-gray-600 mx-3">
                    Our <strong>Money Back Guarantee</strong>,{" "}
                    <strong>Live Projects</strong>, and{" "}
                    <strong>100% Placement Support </strong>
                    ensure your success.
                  </span>
                </div>
                <div className="md:w-1/3 text-center self-center mb-4">
                  <button className={style.Btn}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="bg-gradient-to-b from-blue-400 to-blue-200 py-12">
          <h1 className="text-center text-slate-800 px-1">
            Who Can Apply for the Course?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center p-4 md:p-12">
            {cardData.map((card, index) => (
              <Card key={index} image={card.image} heading={card.heading} />
            ))}
          </div>
        </div>
      </>
      <>
        <div className="my-4 text-center">
          <h2 className="text-pink-800 leading-none">
            200+ Students Trained. 500+ Projects Accomplished.
          </h2>
          <h2 className="text-slate-800 leading-none">
            Experience the power of hands-on learning!
          </h2>
          <div className="d-flex justify-content-center aling-item-center py-2">
            <button className={style.Btn}>Elavate Your Skills</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Second;
