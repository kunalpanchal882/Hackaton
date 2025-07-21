import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    x: 200,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StaggeredText = () => {
  const lines = ["PRIME", "ENERGY"];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center z-50 space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((word, lineIndex) => (
        <motion.div
          key={lineIndex}
          className="flex font-extrabold leading-tight"
          variants={containerVariants}
        >
          {word.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
