import { motion } from "framer-motion";
const TextSpan = ({ children }) => {
  return <motion.span whileHover={{ scale: 1.5 }}>{children}</motion.span>;
};

export default TextSpan;
