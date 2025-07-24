import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import RotatingText from "../components/RotatingText";
import { asynupdateuser } from "../store/actions/userAction";
import { IoArrowBack } from "react-icons/io5";

const Product = () => {
  const {
    userReducer: { users },
    productReducer: { products },
  } = useSelector((state) => state);

  const naviagate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Hides back button on homepage and specific paths
  const showBack = !["/", "/home", "/main"].includes(location.pathname);

  const goBack = () => {
    naviagate(-1);
  };

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
  };

  const renderproduct = products.map((product, index) => {
    const showDetailHandler = () => {
      naviagate(`/admin/product/${product.id}`);
    };

    return (
      <motion.div
        className="w-[15rem] m-4 flex flex-col items-center"
        key={product.id}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="border rounded-lg shadow-md w-full h-[20rem] flex flex-col items-center justify-between p-4 group hover:shadow-xl transition">
          <motion.img
            onClick={showDetailHandler}
            className="w-[12rem] h-[10rem] object-contain transform group-hover:scale-110 transition duration-300 cursor-pointer"
            src={product.image}
            alt={product.title}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <div className="flex items-center justify-between gap-2 w-full mt-4">
            <h1 className="text-[clamp(1rem,2.5vw,1.2rem)] font-semibold line-clamp-2">
              {product.title}
            </h1>
            <FaCartShopping
              onClick={() => addToCartHandler(product)}
              className="text-[clamp(1.2rem,2.5vw,1.4rem)] cursor-pointer hover:text-pink-500 transition"
            />
          </div>
        </div>
      </motion.div>
    );
  });

  return products.length > 0 ? (
    <section>
      {/* Back Button */}
      {showBack && (
        <button
          onClick={goBack}
          className="ml-4 mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition duration-300"
        >
          <IoArrowBack />
        </button>
      )}

      {/* Rotating Heading */}
      <RotatingText
        texts={["PRODUCT", "PRIME", "HYDRATION", "COOL"]}
        mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-5 sm:py-1 md:py-8 justify-center rounded-lg text-[4rem]"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={3000}
      />

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center items-start px-4">
        {renderproduct}
      </div>
    </section>
  ) : (
    "Loading..."
  );
};

export default Product;
