import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StaggeredText from "./StaggerText";
const Showbottle = () => {
  const bottleImages = [
    "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_400x.png?v=1738603072",
    "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_400x.png?v=1745589968",
    "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_400x.png?v=1656076690",
    "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_400x.png?v=1742393763",
    "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstRender = useRef(true); // track first load

  useEffect(() => {
    const interval = setInterval(() => {
      isFirstRender.current = false; // future renders will no longer be first
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bottleImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bottleImages.length]);

  return (
    <div className="justify-items-center mt-[0] h-auto relative  flex items-center justify-center bg-white overflow-hidden">
      {/* PRIME ENERGY TEXT ANIMATION */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute text-[clamp(3rem,13vw,10rem)] leading-[1] text-center pt-[0.7rem] z-0"
      >
        <StaggeredText />
      </motion.div>

      {/* IMAGE ANIMATION */}
      <div className="relative z-10 w-[70%] h-[25.7rem] max-w-[18rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={bottleImages[currentIndex]}
            alt="Prime Bottle"
            className="h-full object-contain mx-auto"
            initial={
              isFirstRender.current
                ? { y: -300, opacity: 0 } // First time: from top
                : { x: -300, opacity: 0 } // Next images: from left
            }
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Showbottle;
