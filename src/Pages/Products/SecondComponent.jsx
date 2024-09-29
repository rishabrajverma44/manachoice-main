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
import food1 from "../../asets/Images/food1.png";
import { fadeIn } from "../../libs/variants";
import Example_3Dcard from "../Home/Example_3Dcard";

const COLORS_TOP = ["#B0C4DE", "#708090", "#4682B4", "#5F9EA0"];

const SecondComponent = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 5%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-1 md:px-4 py-4 text-gray-200"
    >
      <div className="grid grid-cols-1 gap-8 md:p-2 md:grid-cols-2">
        <div className="col py-4">
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-4">
              <Example_3Dcard image={food1} />
            </div>
          </div>
        </div>

        <div className="col bg-salte-500">
          <div className="py-4 mt-4 px-6 mx-4">
            <h5 className="max-w-xl bg-gradient-to-br from-white to-pink-400 bg-clip-text text-left text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-xl md:leading-tight">
              HMS #1 | Leading the Digital Revolution in Food Industry
            </h5>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p-0 m-0 max-w-xl text-left text-gray leading-relaxed md:text-lg md:leading-relaxed"
            >
              Food Booking App: The premier cloud-based food booking app,
              revolutionizing the food ordering experience. Our adaptable
              solution caters to eateries of all scales, seamlessly integrating
              diverse menus, table reservations, and online ordering.<br></br>
              Our intuitive interface and extensive features streamline the food
              ordering process, enriching customer service, and optimizing
              overall operations. From menu exploration to secure payments, our
              app simplifies food ordering, saving time and enhancing the
              culinary journey
            </motion.p>

            <p>
              Want to <span style={{ "font-weight": "bold" }}>kick start</span>{" "}
              your project right now?
            </p>
            <motion.button
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[2px] focus:outline-none"
            >
              <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span class="group inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                Contact Us
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={10} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default SecondComponent;
