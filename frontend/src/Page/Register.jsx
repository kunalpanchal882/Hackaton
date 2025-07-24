import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { asynregisteruser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const registerRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdim = false;
    dispatch(asynregisteruser(user));
    navigate("/login");
  };

  useEffect(() => {
    gsap.from(registerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (check1 && check2) {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [check1, check2]);

  const handleHover = () => {
    if (!check1 || !check2) {
      const newX = Math.random() * 200 - 100;
      const newY = Math.random() * 200 - 100;
      setX(newX);
      setY(newY);
      gsap.to(buttonRef.current, {
        x: newX,
        y: newY,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div ref={registerRef} className="relative w-full h-screen bg-white overflow-x-auto">
      <div className="flex flex-col min-[580px]:flex-row w-full h-full">
        {/* Welcome Section */}
        <section className="flex flex-col justify-center bg-zinc-200 px-4 sm:px-8 py-16 w-full h-[40vh] min-[580px]:h-auto min-[580px]:min-h-screen">
          <button
            onClick={goToHome}
            className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black"
          >
            <HiX />
          </button>
          <h1 className="mb-6 text-[clamp(1.5rem,3vw,2.5rem)] font-bold">Welcome!</h1>
          <p className="text-[clamp(1rem,2.2vw,1.5rem)]">
            Are you a member?
            <span onClick={goToLogin} className="font-bold underline cursor-pointer">
              Login now
            </span>
          </p>
        </section>

        {/* Register Form Section */}
        <section className="flex flex-col justify-center py-8 w-full px-4 sm:px-8 min:w-1/2 min-h-auto">
          <form className="flex flex-col gap-4 w-full px-[1.2rem]" onSubmit={handleSubmit(registerHandler)}>
            <h1 className="font-semibold text-[clamp(1.3rem,2vw,2rem)] mb-[1.2rem]">Registyer Here</h1>

            <label className="opacity-60">USERNAME</label>
            <input {...register("username")}
              className="outline-0 border-b p-2"
              type="text"
              placeholder="Enter your name"
            />

            <label className="opacity-60">E-Mail</label>
            <input {...register("email")}
              className="outline-0 border-b p-2"
              type="text"
              placeholder="Enter your E-mail"
            />

            <label className="opacity-60">PASSWORD</label>
            <input {...register("password")}
              className="outline-0 border-b p-2 mb-4"
              type="password"
              placeholder="Enter your password"
            />

            <p className="text-[clamp(1rem,2vw,1rem)] text-gray-500 mb-6">
              Join the movement that's redefining hydration. By registering,
              you'll get exclusive access to new Prime bottle flavors, limited
              edition drops, and personalized content that fuels your lifestyle.
              Don’t just sip — stand out.
            </p>

            <div className="checked flex flex-col gap-2 mt-2">
              <div className="check flex gap-3">
                <input type="checkbox" onChange={(e) => setCheck1(e.target.checked)} />
                <label className="opacity-70">Please contact me via e-mail</label>
              </div>
              <div className="check2 flex gap-3">
                <input type="checkbox" onChange={(e) => setCheck2(e.target.checked)} />
                <label className="opacity-70">i have read adn aceept the Terms and Conditions</label>
              </div>
            </div>

            <button
              ref={buttonRef}
              onMouseEnter={handleHover}
              className="bg-zinc-800 w-fit px-6 py-2 text-white rounded-lg mt-4 relative"
            >
              Create Account
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
