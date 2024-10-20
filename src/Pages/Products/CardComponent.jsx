import { useState } from "react";

import style from "../globlecss.module.css";
const CardComponent = ({ image, heading, para }) => {
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
          <p className="text-slate-950 font-semibold text-sm">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
