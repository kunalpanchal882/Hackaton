import { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
import { HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { asynlogoutuser } from "../store/actions/userAction";

const Menu = forwardRef((props, ref) => {
  const menuref = useRef(null);
  const iconref = useRef(null);
  const navRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const t1 = useRef(gsap.timeline({ paused: true }));

  useImperativeHandle(ref, () => ({
    openMenu: () => {
      t1.current.play();
    },
  }));

  const closemenuHandler = () => {
    t1.current.reverse();
  };

  useEffect(() => {
    t1.current.to(menuref.current, {
      top: 0,
      duration: 0.8,
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
  }, []);

  const user = useSelector((state) => state.userReducer.users);

  const LogoutHandler = () => {
    dispatch(asynlogoutuser());
    navigate("/");
  };

  return (
    <section
      ref={menuref}
      className="fixed  top-[-100%] left-0 w-full z-50 bg-white overflow-y-auto max-h-screen"
    >
      <div className="flex flex-col gap-4 bg-zinc-800 p-4 w-full text-white">
        <button>
          <HiX
            onClick={closemenuHandler}
            ref={iconref}
            className="text-[clamp(2rem,4vw,3rem)] bg-black rounded-full text-white p-1"
          />
        </button>

        <div className="nav flex flex-col items-center justify-center flex-1 gap-4">
          <NavLink
            ref={(el) => (navRefs.current[0] = el)}
            className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            ref={(el) => (navRefs.current[1] = el)}
            className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
            to="/products"
          >
            Product
          </NavLink>
          <NavLink
            ref={(el) => (navRefs.current[2] = el)}
            className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            ref={(el) => (navRefs.current[3] = el)}
            className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
            to="/about"
          >
            About
          </NavLink>

          {user ? (
            <>
              {user?.isAdmin && (
                <NavLink
                  to="/admin/create-product"
                  ref={(el) => (navRefs.current[4] = el)}
                  className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
                >
                  Create Product
                </NavLink>
              )}

              <NavLink
                to="/admin/user-profile"
                ref={(el) => (navRefs.current[5] = el)}
                className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
              >
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              ref={(el) => (navRefs.current[6] = el)}
              className="text-[clamp(1.8rem,4vw,3.2rem)] text-center"
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
});

export default Menu;
