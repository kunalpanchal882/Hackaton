import { motion } from "framer-motion";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import MobileMenu from "./Menu"; // This is your animated menu

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
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setTimeout(() => {
      menuRef.current?.openMenu(); // trigger GSAP after mounted
    }, 0);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="flex  rounded-lg justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Left Icon */}
        <motion.div className="text-[2.3rem]" variants={itemVariants} onClick={handleOpenMenu}>
          <FiAlignJustify />
        </motion.div>

        {/* Center Logo Text */}
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
        <motion.div variants={itemVariants}>
          <NavLink
            to="/products"
            className="bg-zinc-500 rounded-lg px-3 py-2 font-semibold text-white text-sm shadow-md hover:bg-zinc-600 transition"
          >
            BUY NOW
          </NavLink>
        </motion.div>
      </motion.div>

      {/* Render menu conditionally */}
      {isMenuOpen && <MobileMenu ref={menuRef} onClose={handleCloseMenu} />}
    </>
  );
};

export default Navbar;
