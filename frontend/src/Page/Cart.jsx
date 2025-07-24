import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { asynupdateuser } from "../store/actions/userAction";
import { motion } from "framer-motion";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();

  if (!users || !users.cart) return <div>Loading...</div>;

  const goToProduct = () => {
    navigate("/products");
  };

  const increaseQuantityHandler = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(asynupdateuser(copyuser.id, copyuser));
  };

  const decreseQuantityHandler = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };
    if (users.cart[index].quantity > 0) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart = [];
      navigate("/products");
    }
    dispatch(asynupdateuser(copyuser.id, copyuser));
  };

  const cartItems = users.cart.map((c, index) => (
    <div
      key={c.product.id}
      className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 px-4"
    >
      {/* Image */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="image flex justify-center"
      >
        <img className="w-64 object-contain" src={c.product.image} alt="" />
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="details flex flex-col items-center md:items-start w-full md:w-1/2 max-w-[600px]"
      >
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
          {c.product.title}
        </h1>

        {/* Price and Quantity */}
        <p className="text-2xl font-semibold mb-4">${c.product.price}</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center w-full max-w-sm px-4 py-2 bg-gray-100 rounded-md shadow mb-4"
        >
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
            <FaMinus
              className="cursor-pointer"
              onClick={() => decreseQuantityHandler(index)}
            />
          </motion.div>
          <span className="text-lg font-semibold">{c.quantity}</span>
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
            <FaPlus
              className="cursor-pointer"
              onClick={() => increaseQuantityHandler(index)}
            />
          </motion.div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="w-full md:max-w-[400px] flex flex-col gap-3 items-center md:items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 w-full rounded-lg px-6 py-2.5 font-bold text-white text-base md:text-lg shadow-md hover:bg-green-600 transition"
          >
            BUY NOW
          </motion.button>

          <motion.button
            onClick={goToProduct}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 w-full rounded-lg px-6 py-2.5 font-bold text-white text-base md:text-lg shadow-md hover:bg-yellow-600 transition"
          >
            View More Products
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  ));

  return (
    <section className="cart">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-8">{cartItems}</div>
    </section>
  );
};

export default Cart;
