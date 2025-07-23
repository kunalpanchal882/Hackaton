import { forwardRef, useEffect, useRef,useImperativeHandle } from "react";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
const Menu = forwardRef((props,ref) => {

  const menuref = useRef(null);
  const iconref = useRef(null);
  const navRefs = useRef([]);

  const t1 = useRef(gsap.timeline({ paused: true }));

  useImperativeHandle(ref, () => ({
    openMenu: () => {
      t1.current.play();
    },
  }));

  const closemenuHandler  = () => {
    t1.current.reverse()
  }

  useEffect(() => {
    t1.current.to(menuref.current, {
      top: 0,
      duration: 1,
    });

    t1.current.from(navRefs.current, {
      y: -100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "power3.out",
    });

    t1.current.from(iconref.current, {
      opacity: 0,
    });



  },[]);

  return (
    <section
      ref={menuref}
      className="absolute top-[-100%] rounded-lg  w-full h-1/2 m-0 p-0 fixed top-0 left-0 z-50 bg-white"
    >
      <div className="flex flex-col gap-4  bg-zinc-800   p-4 w-full w-full text-white">
        <button>
          <HiX ref={iconref} className="text-[clamp(2.1rem,6vw,4rem)] bg-black rounded-full text-white p-1 " />
        </button>
        <div
          
          className="nav  flex flex-col items-center justify-center flex-1 gap-6"
        >
          <NavLink ref={el => navRefs.current[0] =el} className="text-[clamp(2.3rem,6vw,9rem)]" to="/">
            Home
          </NavLink>
          <NavLink ref={el => navRefs.current[1] = el} className="text-[clamp(2.3rem,6vw,9rem)]" to="/products">
            Product
          </NavLink>
          <NavLink ref={el => navRefs.current[2] = el} className="text-[clamp(2.3rem,6vw,9rem)]" to="/about">
            About
          </NavLink>
          <NavLink to="/login" ref={el => navRefs.current[3] = el} className="text-[clamp(2.3rem,6vw,9rem)]" to="/login">
            Log In
          </NavLink>
        </div>
      </div>
    </section>
  );
});

export default Menu;
