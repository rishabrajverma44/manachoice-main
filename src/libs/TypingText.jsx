import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, speed = 0.1, loopDelay = 2 }) => {
  const words = text.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");
  const [isTyping, setIsTyping] = useState(true);
  const letters = lastWord.slice(1).split("");
  const firstLetter = lastWord.charAt(0);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => setIsTyping(true), loopDelay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, loopDelay]);

  return (
    <h4 className="flex text-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-800 py-2">
      <span>{firstPart} </span>
      <span>&nbsp;{firstLetter}</span>
      {isTyping &&
        letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * speed }}
            onAnimationComplete={() => {
              if (index === letters.length - 1) {
                const timeout = setTimeout(() => {
                  setIsTyping(false);
                }, 2000);
                return () => clearTimeout(timeout);
              }
            }}
            className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-violet-800"
          >
            {letter}
          </motion.span>
        ))}
    </h4>
  );
};

export default TypingText;
