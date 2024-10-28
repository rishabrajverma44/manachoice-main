import { useState } from "react";

import style from "../globlecss.module.css";
const CardComponent = ({ image, heading, para, tech }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card w-100 h-100 sm:w-64"
      style={{ borderRadius: "10px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.card}>
        <div className={style.card_content}>
          <h4 className="text-bold bg-clip-text text-bold text-transparent bg-gradient-to-r from-pink-800 to-violet-800 py-2">
            {heading}
          </h4>
          <img
            src={image}
            alt="Product"
            style={{ height: "170px", width: "250px" }}
            className="border border-2"
          />
        </div>
        <div
          className={`w-100 h-100 ${style.card_para} ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-slate-950 font-semibold text-sm subpixel-antialiased">
            {para}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-1">
            {tech.map((item, index) => (
              <span key={index}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-semibold px-2 py-1 rounded">
                  {" "}
                  {item}
                </span>
                {index < tech.length - 1 && " | "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
