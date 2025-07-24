// components/PrimeCTA.jsx
import { motion } from "framer-motion";

const PrimeCTA = ({ buttonText = "SUBSCRIBE", placeholder = "Enter your email", onClick }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-2 px-4 sm:px-0">
      {/* Input Field */}
      <input
        type="email"
        placeholder={placeholder}
        className="px-4 py-2 w-full sm:w-[250px] rounded-md bg-white text-black text-sm focus:outline-none"
      />

      {/* Animated Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="px-6 py-2 uppercase font-bold tracking-wide text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md w-full sm:w-fit"
      >
        {buttonText}
      </motion.button>
    </div>
  );
};

export default PrimeCTA;
