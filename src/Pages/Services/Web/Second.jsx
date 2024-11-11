import React from "react";
import development from "../../../asets/Images/development.jpg";
import BrandImages from "../../../libs/BrandImages";
import { AnimatedText } from "../../../libs/AnimatedText";

const Second = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-10 md:p-12">
        <div className="lg:col-span-4">
          <img
            src={development}
            alt="dev"
            style={{ height: "240px" }}
            className="m-4 border-2 border-indigo-600 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:col-span-8 px-4 md:py-4">
          <h4 className="text-pink-700 uppercase">
            <AnimatedText text="Overview" once={false} repeatDelay={1000} />
          </h4>
          <h1>Web Design and Development Service</h1>
          <p className="font-sans text-gray-500">
            We offer exceptional web development services to improve your online
            presence and boost your business. Our team of experts is dedicated
            to creating seamless web solutions that captivate your audience and
            deliver tangible results. Let us help your brand thrive in the
            digital world. Contact us now to begin your online business!
          </p>
        </div>
      </div>
      <div className="bg-gray-100 text-center md:p-3">
        <h1 className="font-sans text-slate-9 p-2">
          <AnimatedText
            text="Technologies Used"
            once={false}
            repeatDelay={1000}
          />
        </h1>
        <BrandImages />
      </div>
    </div>
  );
};

export default Second;
