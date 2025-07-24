import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {asyndeleteproducts, asynupdateproducts,} from "../../store/actions/productAction";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { asynupdateuser } from "../../store/actions/userAction";

// import useRef from 'useRef'
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const registerRef = useRef(null);
  const dispatch = useDispatch();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const product = products.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      catogory: product?.catogory,
    },
  });

  // if (!product) {
  //   return (
  //     <div>
  //       <Navbar />
  //       <div className="text-center mt-20 font-bold text-lg">Loading product...</div>
  //     </div>
  //   );
  // }

  const addToCartHandler = (product) => {
      if (!users || !users.cart) {
        console.error("User or cart is not available");
        return;
      }
  
      const copyuser = { ...users, cart: [...users.cart] };
      const checkcart = copyuser.cart.findIndex(
        (c) => c?.product?.id == product.id
      );
  
      if (checkcart === -1) {
        copyuser.cart.push({ product, quantity: 1 });
      } else {
        copyuser.cart[checkcart] = {
          product,
          quantity: copyuser.cart[checkcart].quantity + 1,
        };
      }
  
      dispatch(asynupdateuser(copyuser.id, copyuser));

      navigate("/cart")
    };

  const updateproductHandler = (product) => {
    dispatch(asynupdateproducts(id, product));
  };

  const Deletehandler = (id) => {
    dispatch(asyndeleteproducts(id));
    navigate("/products");
  };

  return product ? (
    <div>
      <Navbar />
      <div className="mg flex flex-col md:flex-row items-center justify-center gap-12 px-4 mt-8">
        {/* Image from Top */}
        <motion.img
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[70%] max-w-[500px] md:w-[30%]"
          src={product.image}
          alt=""
        />

        {/* Title from Right */}
        <div className="text-center md:text-left md:w-[40%] flex flex-col items-start">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[clamp(2rem,6vw,4rem)] font-semibold line-clamp-2 mb-4"
          >
            {product.title}
          </motion.h1>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="buy flex items-center gap-6"
          >
            <div className="review flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <button  onClick={() => addToCartHandler(product)} className="bg-zinc-500 rounded-lg px-3 py-2 font-semibold text-white text-sm shadow-md hover:bg-zinc-500 transition">
              Add to Cart
            </button>
          </motion.div>
        </div>
      </div>
      {users && users.isAdmi && (
        <div className="updateproduct">
          <form
            className="flex flex-col gap-4 w-full px-[1.2rem]"
            onSubmit={handleSubmit(updateproductHandler)}
          >
            <h1 className=" font-semibold text-[clamp(1.3rem,2vw,2rem)] mb-[1.2rem]">
              Update Products
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
              <option className="hover:bg-zinc-900" value="ice-pop">
                Ice Pop
              </option>
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
            <div className="btn flex gap-4">
              <button className="bg-zinc-800 w-fit px-6 py-2 text-white rounded-lg mt-4">
                Update Products
              </button>
              <button
                onClick={() => Deletehandler(id)}
                className="bg-red-800 w-fit px-6 py-2 text-white rounded-lg mt-4"
              >
                Update Products
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    "Loading..."
  );
};

export default ProductDetail;
