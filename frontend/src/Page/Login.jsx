import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { asynloginuser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const loginRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const LoginHandler = (user) => {
    if (!isChecked) {
      const directions = [
        { x: -200, y: 200 },
        { x: 200, y: 200 },
        { x: -300, y: 150 },
        { x: 300, y: 150 },
      ];
      const random = directions[Math.floor(Math.random() * directions.length)];

      gsap.to(buttonRef.current, {
        x: random.x,
        y: random.y,
        duration: 0.5,
        ease: "power2.out",
      });
      return;
    }

    dispatch(asynloginuser(user));
    navigate("/home");
  };

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(loginRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isChecked && buttonRef.current) {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isChecked]);

  const closeLog = () => {
    navigate("/home");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div ref={loginRef} className="relative w-full h-screen bg-white overflow-x-auto">
      <div className="flex flex-col min-[580px]:flex-row w-full h-full">
        {/* Welcome Section */}
        <section className="flex flex-col justify-center bg-zinc-200 px-4 sm:px-8 py-16 w-full h-[40vh] min-[580px]:h-auto min-[580px]:min-h-screen">
          <button onClick={closeLog} className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black">
            <HiX />
          </button>
          <h1 className="mb-6 text-[clamp(1.5rem,3vw,2.5rem)] font-bold">Welcome!</h1>
          <p className="text-[clamp(1rem,2.2vw,1.5rem)]">
            Not a member yet?{" "}
            <span onClick={goToRegister} className="font-bold underline cursor-pointer">
              Register now
            </span>
          </p>
        </section>

        {/* Login Form Section */}
        <section className="flex flex-col justify-center py-8 w-full px-4 sm:px-8 min:w-1/2 min-h-auto">
          <form className="flex flex-col gap-4 w-full px-[1.2rem]" onSubmit={handleSubmit(LoginHandler)}>
            <h1 className="font-semibold text-[clamp(1.3rem,2vw,2rem)] mb-[1.2rem]">Log in</h1>
            <label className="opacity-60">E-mail</label>
            <input {...register("email")} className="outline-0 border-b p-2" type="email" placeholder="Enter your Email" />
            <label className="opacity-60">PASSWORD</label>
            <input {...register("password")} className="outline-0 border-b p-2" type="password" placeholder="Enter your password" />
            <div className="checked flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
              />
              <label className="opacity-70">Keep me Logged in</label>
            </div>
            <button
              ref={buttonRef}
              type="submit"
              className="bg-zinc-800 w-fit px-6 py-2 text-white rounded-lg mt-4"
            >
              Log in Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
