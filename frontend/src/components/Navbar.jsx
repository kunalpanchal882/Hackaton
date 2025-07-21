import { motion } from "framer-motion";
import { FiAlignJustify } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// For each letter of "PRIME"
const textContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const brand = "PRIME";

  return (
    <motion.div
      className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Left Icon */}
      <motion.div className="text-[2.3rem]" variants={itemVariants}>
        <FiAlignJustify />
      </motion.div>

      {/* Center PRIME with letter-by-letter animation */}
      <motion.div variants={itemVariants}>
        <motion.h1
          className="font-bold text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] flex gap-[0.15em]"
          variants={textContainerVariants}
          initial="hidden"
          animate="show"
        >
          {brand.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      {/* Right Button */}
      <motion.div variants={itemVariants} className="bg-zinc-500 rounded-lg px-3 py-[0.8] sm:px-[0.6] sm:py-[0.5] md:px-[-0.5] md:py-[0.6] font-semibold text-white text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] shadow-md hover:bg-zinc-600 transition">
        <h1 className="text-[0.8rem] py-[0.5rem] px-[0.6rem]">BUY NOW</h1>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
