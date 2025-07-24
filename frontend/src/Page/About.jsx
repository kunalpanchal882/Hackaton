import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const leftimgRef = useRef(null);
    const rightimgRef = useRef(null);
    const lefttextRef = useRef(null);
    // const pararef = useRef(null);
    // const buyref = useRef(null);

  useEffect(() => {
    gsap.to(leftimgRef.current, {
      rotate: "-20deg",
      duration: 2,
      left:"2rem",
      scrollTrigger: {
        trigger: leftimgRef.current,
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub: 2,
      },
    });
  },[]);

  useEffect(() => {
    gsap.to(rightimgRef.current, {
      rotate: "20deg",
      duration: 2,
      right:"2rem",
      scrollTrigger: {
        trigger: rightimgRef.current,
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub: 2,
      },
    });
  },[]);

  useEffect(() => {
    gsap.from(lefttextRef.current, {
      duration: 2,
      opacity:0,
      x:-100,
      scrollTrigger: {
        trigger: lefttextRef.current,
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
      },
    });
  },[]);



  return (
    <section className="w-full md:min-h-screen md:flex md:justify-between items-center px-4 md:px-6 py-6">
      
      {/* TEXT SECTION */}
      <div className=" flex flex-col gap-[0.4rem] md:w-1/2 mt-0 md-gap-0">
        <h1 
        // ref={lefttextRef}
        className=" text-[3rem] tracking-tight font-bold">
          BEHIND THE BOTTLE
        </h1>

        <p
        // ref={pararef} 
        className="text-[1.2rem] font-semibold opacity-70 mb-2">
          Prime isn’t just a drink — it’s a mindset. We’re built for those who
          move fast, dream big, and live loud. From game changers to go-getters,
          Prime is made to fuel your fire and keep you cool. Every sip delivers
          freshness, energy, and bold flavor — because ordinary just isn’t our
          style. Welcome to the future of hydration.
        </p>

        <div 
        // ref={buyref} 
        className="w-fit bg-zinc-500 rounded-lg px-4 py-2 font-semibold text-white text-sm sm:text-base shadow-md hover:bg-zinc-600 transition cursor-pointer">
          BUY NOW
        </div>
      </div>
      
      {/* IMAGE SECTION */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center relative">
        {/* Left bottle (behind) */}
        <img
          ref={leftimgRef}
          className="w-[60%] max-w-[400px] object-contain absolute l top-2 z-0 rotate-[-5deg]"
          src="https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_400x.png?v=1738603072"
          alt="Prime Bottle Left"
        />

        {/* Center bottle (main focus) */}
        <img
          className="w-[70%] max-w-[400px] object-contain z-10"
          src="https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_400x.png?v=1656076690"
          alt="Prime Bottle Center"
        />

        {/* Right bottle (behind) */}
        <img
            ref={rightimgRef}
          className="w-[60%] max-w-[400px] object-contain absolute  top-4  z-0 rotate-[5deg]"
          src="https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_400x.png?v=1745589968"
          alt="Prime Bottle Right"
        />
      </div>
    </section>
  );
};

export default About;
