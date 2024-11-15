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

const Second = () => {
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
            <button className={style.Btn}>Enroll Now</button>
          </div>
        </div>
      </div>
      <>
        <div>
          <div className="p-2 md:my-12">
            <h2 className="text-center text-slate-800">
              Key Features of the Program
            </h2>
            <div className="md:flex justify-center items-center text-center">
              <div className="w-100 md:w-1/2 flex flex-col items-start justify-center md:pl-48">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" /> 3-6 Months of
                  Applied Learning
                </span>
                <span className="flex items-center">
                  <FaProjectDiagram className="mr-2 text-green-500" /> 5-10 Live
                  Projects
                </span>
                <span className="flex items-center">
                  <FaHandsHelping className="mr-2 text-yellow-500" /> 100%
                  Placement Assistance
                </span>
                <span className="flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-purple-500" /> Learn
                  from Industry Experts
                </span>
                <span className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-red-500" /> Money Back
                  Guarantee
                </span>
              </div>

              <div className="w-100 md:w-1/2 flex flex-col items-start justify-center md:pl-4">
                <span className="flex items-center">
                  <FaUserCheck className="mr-2 text-blue-500" /> 1:1 Mock
                  Interview
                </span>
                <span className="flex items-center">
                  <FaCompass className="mr-2 text-green-500" /> Career Guidance
                  and Portfolio Building
                </span>
                <span className="flex items-center">
                  <FaBriefcase className="mr-2 text-yellow-500" /> Designed for
                  Working Professionals and Freshers
                </span>
                <span className="flex items-center">
                  <FaCreditCard className="mr-2 text-purple-500" /> No-cost EMI
                  options
                </span>
                <span className="flex items-center">
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
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                Website Design and Development Program
              </h2>
              <p className="mb-4">
                Uvaan's Website Development Training offers an exceptional Full
                Stack Web development course designed to take your skills to the
                next level.
              </p>
              <p className="mb-4">
                Whether you're a seasoned programmer looking to enhance your
                knowledge or a beginner eager to dive into the exciting world of
                web development, our comprehensive course has you covered.
              </p>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-2/3 mb-4 md:mb-0">
                  <span className="block text-lg text-blue-800 font-bold">
                    Invest In Your Career Fearlessly!
                  </span>
                  <span className="block text-gray-600">
                    Our Money Back Guarantee, Live Projects, and 100% Placement
                    Support ensure your success.
                  </span>
                </div>
                <div className="md:w-1/3 text-center">
                  <button className={style.Btn}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Second;
