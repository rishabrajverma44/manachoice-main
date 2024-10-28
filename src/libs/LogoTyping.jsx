import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LogoTyping = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Wait for 2 seconds before restarting
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setTextIndex(0);
      }, 2000); // 2-second delay
      return () => clearTimeout(restartTimeout);
    }
  }, [textIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default LogoTyping;
