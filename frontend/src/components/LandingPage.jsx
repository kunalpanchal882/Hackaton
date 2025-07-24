import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 35);
      return () => clearInterval(interval);
    } else {
      // Go to Home after short delay
      setTimeout(() => {
        navigate("/home"); // 👈 make sure your Home route is "/home"
      }, 1200);
    }
  }, [progress]);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Progress Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-wider text-[#00ff99] font-sans uppercase mb-8"
      >
        Loading {progress}%
      </motion.h1>

      {/* Line Progress */}
      <div className="w-[80%] h-2 bg-gray-800 rounded-full mb-10 overflow-hidden">
        <motion.div
          className="h-full bg-[#00ff99] rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      </div>

      {/* Final PRIME text (fade + zoom before transition) */}
      {progress >= 100 && (
        <motion.div
          className="absolute inset-0 bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-extrabold text-[#00ff99] uppercase tracking-wide"
          >
            PRIME
          </motion.h1>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingPage;
