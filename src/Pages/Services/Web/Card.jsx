import React from "react";

const Card = ({ image, heading, descriptions }) => {
  return (
    <div>
      <div className="relative mx-auto w-full max-w-xs flex flex-col items-center justify-center text-center group cursor-pointer">
        <div className="relative z-10 bg-white px-4 py-6 shadow-md rounded-lg transform transition-transform duration-300 border-2 border-transparent group-hover:border-indigo-300 group-hover:shadow-lg group-hover:scale-105">
          <img
            src={image}
            alt="ui/ux"
            className="mx-auto"
            style={{ height: "90px" }}
          />
          <h3 className="text-2xl font-bold mt-4">{heading}</h3>
          <div className="absolute inset-x-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-75"></div>
          <p className="mt-4 text-sm">{descriptions}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
