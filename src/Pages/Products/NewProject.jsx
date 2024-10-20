import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants";

const NewProject = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-center"
      >
        <motion.h1
          variants={fadeIn("left", 0.5)}
          className="bg-clip-text text-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2" // Added margin-bottom
        >
          Let's Start
        </motion.h1>
        <FlipLink href="#">New-Project</FlipLink>
        <motion.h1
          variants={fadeIn("right", 0.5)}
          className="bg-clip-text text-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          a Together
        </motion.h1>
      </motion.div>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-sm font-black uppercase sm:text-3xl md:text-md lg:text-5xl"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-green-800"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-pink-800"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default NewProject;
