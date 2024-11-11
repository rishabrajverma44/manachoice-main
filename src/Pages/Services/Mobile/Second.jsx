import React from "react";
import Technology from "./Technology";
import style from "../../globlecss.module.css";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../libs/variants";

const Second = () => {
  return (
    <>
      <div className="bg-slate-200">
        <Technology />
      </div>
      <>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(222, 0, 75, 0.2) 10%, rgba(191, 70, 255, 0.2) 39%, rgba(0, 212, 255, 0.1) 100%)",
          }}
        >
          <div className="py-12">
            <h5 className="text-center text-pink-800 uppercase text-lg">
              Let's work together
            </h5>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center"
            >
              We would love to hear your <br />
              Requirements
            </motion.h1>
            <div className="d-flex justify-content-center aling-item-center my-4">
              <button className={style.Btn}>Enquiry Now</button>
            </div>
            <h3 className="d-flex justify-content-center my-4">
              <span className="mt-2 mx-2">
                <FaPhone size={24} className="text-current" />
              </span>
              <span> +9304746833</span>
            </h3>
          </div>
        </div>
      </>
    </>
  );
};

export default Second;
