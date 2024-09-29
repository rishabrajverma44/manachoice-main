import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { fadeIn } from "../../libs/variants";
import { motion } from "framer-motion";

const FourthComponent = () => {
  return (
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
        <div className="text-center my-4">
          <button class="relative inline-flex h-8 active:scale-95 transistion overflow-hidden rounded-lg p-[2px] focus:outline-none">
            <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
            <span class="group inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
              Contact Us
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </span>
          </button>
        </div>
        <h3 className="d-flex justify-content-center my-4">
          <span className="">Or call at</span>
          <span className="mt-2 mx-4">
            <FaPhone size={24} className="text-current" />
          </span>
          <span> +9304746833</span>
        </h3>
      </div>
    </div>
  );
};

export default FourthComponent;
