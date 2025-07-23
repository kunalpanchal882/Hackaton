import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const ScrollingText = () => {
  const content = `
    DRINK PRIME — STAY HYDRATED — WIN BIG —
    HYDRATE. COMPETE. CONQUER. —
    PUSH YOUR LIMITS —
  `;

    const setIsVisible =() =>{
        console.log("hello");
        
    }

  return (
    <div className="relative flex flex-col gap-[1.2rem] w-full overflow-hidden bg-black text-white py-4">
      <motion.div
        className="flex whitespace-nowrap"
        // style={{ pointerEvents: "auto" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
       
        // onMouseLeave={() => setIsVisible(false)}    
      >
        {/* First set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>

        {/* Second set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* First set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>

        {/* Second set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* First set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>

        {/* Second set of repeating text */}
        <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
          {content.repeat(3)}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollingText;
