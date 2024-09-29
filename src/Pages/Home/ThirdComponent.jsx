import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import poster from "../../asets/Images/about-company.jpg";
import { fadeIn } from "../../libs/variants";
import Example_3Dcard from "./Example_3Dcard";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ThirdComponent = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-1 md:px-4 py-4 text-gray-200"
    >
      <div className="row">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-xl bg-gradient-to-br from-white to-green-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight"
        >
          Why Choose Us
        </motion.h3>
        <h2 className="text-center md:text-lg text-pink-700">
          Our Key Features
        </h2>
        <motion.p
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-xl text-center text-base leading-relaxed md:text-xl md:leading-relaxed"
        >
          Qualities that we adhere to which makes us one of the leading software
          companies.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:p-2 md:grid-cols-2">
        <div className="col">
          <div className="py-4 mt-4 px-6 mx-4 border border-2 rounded">
            <h5 className="max-w-xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
              Quality
            </h5>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p-0 m-0 max-w-xl text-left text-base leading-relaxed md:text-lg md:leading-relaxed"
            >
              Our software is built with the highest quality standards and is
              rigorously tested to ensure that it meets the needs of our
              customers.
            </motion.p>
            <h5 className="max-w-xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
              Timeliness
            </h5>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p-0 m-0 max-w-xl text-left text-base leading-relaxed md:text-lg md:leading-relaxed"
            >
              We understand that time is money, so we make sure to deliver our
              software on time and within budget.
            </motion.p>
            <h5 className="max-w-xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
              Support
            </h5>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className="p-0 m-0 max-w-xl text-left text-base leading-relaxed md:text-lg md:leading-relaxed"
            >
              We offer a variety of support options, including online support,
              phone support, and email support, to ensure that our customers
              have the help they need when they need it.
            </motion.p>
          </div>
        </div>
        <div className="col py-4">
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-4">
              <Example_3Dcard image={poster} />
            </div>

            <motion.button
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Contact Now
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={30} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default ThirdComponent;
