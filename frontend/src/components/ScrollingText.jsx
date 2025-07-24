import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const ScrollingText = () => {
  const content = `
    DRINK PRIME — STAY HYDRATED — WIN BIG —
    HYDRATE. COMPETE. CONQUER. —
    PUSH YOUR LIMITS —
  `;

  const images = [
    "https://cdn.destinilocators.com/prime/images/6fa44c25e1f921c728e38eab670e3fb1-300x300.png",
    "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_IcePop_00000_400x.png?v=1738603065",
    "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_BlueRaspberry_00000_400x.png?v=1738603072"
  ];

  const [showImage, setShowImage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeRow, setActiveRow] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="cursor-pointer relative flex flex-col gap-[1.2rem] w-full overflow-hidden bg-zinc-400 "
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-follow image with AnimatePresence */}
      <AnimatePresence mode="wait">
        {showImage && activeRow !== null && (
          <motion.img
            key={activeRow} // Important for re-triggering animation
            src={images[activeRow]}
            alt="Prime Cursor"
            className="pointer-events-none absolute w-50 h-49 rounded-full bg-zinc-500 z-50 object-cover"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </AnimatePresence>

      {/* Scrolling Text Rows */}
      {[0, 1, 2].map((row, i) => (
        <motion.div
          key={i}
          className="flex whitespace-nowrap"
          onMouseEnter={() => {
            setShowImage(true);
            setActiveRow(i);
          }}
          onMouseLeave={() => {
            setShowImage(false);
            setActiveRow(null);
          }}
          animate={{ x: i % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <div className="flex-shrink-0 px-4  text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
            {content.repeat(3)}
          </div>
          <div className="flex-shrink-0 px-4 text-[clamp(1.2rem, 2vw, 3.5rem)] sm:text-[2.2rem] md:text-[3rem] lg:text-[4.5rem] font-bold tracking-wide uppercase">
            {content.repeat(3)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingText;
