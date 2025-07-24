import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
// import { asynregisteruser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";
import Product from "../Product";
import { asyncreateproducts } from "../../store/actions/productAction";

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const registerRef = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const createproductHandler = (product) => {
    product.id = nanoid();
    // product.isAdim = false,
    console.log(product);
    navigate("/products")
    dispatch(asyncreateproducts(product))
  };

  useEffect(() => {
    gsap.from(registerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div
      ref={registerRef}
      className="relative w-full h-screen bg-white overflow-x-auto"
    >
      <div className="flex flex-col min-[580px]:flex-row w-full h-full">
        {/* Welcome Section */}
        <section className="flex flex-col justify-center bg-zinc-200 px-4 sm:px-8 py-16 w-full h-[40vh] min-[580px]:h-auto min-[580px]:min-h-screen">
          <button
            onClick={goToHome}
            className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-black"
          >
            <HiX />
          </button>
          <h1 className="mb-6 text-[clamp(1.5rem,3vw,2.5rem)] font-bold">
            Welcome!
          </h1>
          <p className="text-[clamp(1rem,2.2vw,1.5rem)]">
            You're an <span className="text-Slate-500 font-bold">admin</span>{" "}
            you can create products
          </p>
        </section>

        {/* Login Form Section */}
        <section className="flex flex-col justify-center py-8 w-full px-4 sm:px-8  min:w-1/2 min-h-auto">
          <form
            className="flex flex-col gap-4 w-full px-[1.2rem]"
            onSubmit={handleSubmit(createproductHandler)}
          >
            <h1 className=" font-semibold text-[clamp(1.3rem,2vw,2rem)] mb-[1.2rem]">
              Create Products
            </h1>
            <label className="opacity-60">Past Image URL</label>
            <input
              {...register("image")}
              className="outline-0 border-b "
              type="url"
              placeholder="Image URL"
            />
            <label className="opacity-60">Enter Title Of Product</label>
            <input
              {...register("title")}
              className="outline-0 border-b "
              type="text"
              placeholder="Enter your name"
            />
            <label className="opacity-60">Price</label>
            <input
              {...register("price")}
              className="outline-0 border-b "
              type="text"
              placeholder="price"
            />
            <label className="opacity-60">Description</label>
            <textarea
              {...register("description")}
              className="outline-0 border-b mb-4"
              type="text"
              placeholder="Enter Discription"
            ></textarea>
            <label className="opacity-60">Select catogory</label>
            <select
              {...register("catogory")}
              className="outline-0 border-b mb-4"
              type="select"
              placeholder="catogory"
            >
              <option className="hover:bg-zinc-900" value="ice-pop">Ice Pop</option>
              <option value="blue-raspberry">Blue Raspberry</option>
              <option value="tropical-punch">Tropical Punch</option>
              <option value="meta-moon">Meta Moon</option>
              <option value="lemon-lime">Lemon Lime</option>
              <option value="grape">Grape</option>
              <option value="orange">Orange</option>
              <option value="strawberry-watermelon">
                Strawberry Watermelon
              </option>
              <option value="lemonade">Lemonade</option>
              <option value="kiwi-strawberry">Kiwi Strawberry</option>
              <option value="cherry-freeze">Cherry Freeze</option>
              <option value="orange-mango">Orange Mango</option>
              <option value="glowberry">Glowberry</option>
              <option value="strawberry-banana">Strawberry Banana</option>
              <option value="future-freeze">Future Freeze</option>
            </select>
            <button onClick={createproductHandler} className="bg-zinc-800 w-fit px-6 py-2 text-white rounded-lg mt-4">
              Create Products
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateProduct;
