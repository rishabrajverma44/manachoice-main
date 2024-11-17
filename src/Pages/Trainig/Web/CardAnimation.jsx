import React from "react";
import { motion } from "framer-motion";
import style from "../../globlecss.module.css";

const CardAnimation = ({ imagePath, cardTitle, cardDescription }) => {
  return (
    <motion.div
      className={style.card2}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.img
        src={imagePath}
        alt={cardTitle}
        style={{ height: "200px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className={style.card__content}>
        <p className={style.card__title}>{cardTitle}</p>
        <p className={style.card__description}>{cardDescription}</p>
      </div>
    </motion.div>
  );
};

export default CardAnimation;
