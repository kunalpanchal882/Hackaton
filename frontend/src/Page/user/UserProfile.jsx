import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { asynupdateuser, asyndeleteuser, asynloginuser } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateuserHandler = (user) => {
    dispatch(asynupdateuser(users.id, user));
  };

  const Logoutuserhandler = () => {
    dispatch(asynloginuser(users.id));
    navigate("/login");
  };

  const Deletehandler = () => {
    dispatch(asyndeleteuser(users.id));
    navigate("/login");
  };

  return users ? (
    <div className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-[3rem] px-4 py-16">
      {/* TEXT SECTION */}
      <motion.div
        className="flex-1 font-bold flex flex-col items-center md:items-start text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h3
          className="text-[clamp(1.2rem,2vw,1.6rem)] text-gray-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME!
        </motion.h3>

        <motion.h1
          className="text-[clamp(2.5rem,4vw,4rem)] font-bold uppercase"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {users.username}
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,1.5vw,1.3rem)] mt-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {users.email}
        </motion.p>
      </motion.div>

      {/* FORM SECTION */}
      <motion.form
        className="flex-1 flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit(updateuserHandler)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-semibold text-[clamp(1.5rem,2vw,2rem)] mb-4">Profile</h1>

        <label className="opacity-60">Username</label>
        <input
          {...register("username")}
          className="outline-0 border-b py-2 px-1"
          type="text"
          placeholder="username"
        />

        <label className="opacity-60">E-mail</label>
        <input
          {...register("email")}
          className="outline-0 border-b py-2 px-1"
          type="email"
          placeholder="email"
        />

        <label className="opacity-60">Password</label>
        <input
          {...register("password")}
          className="outline-0 border-b py-2 px-1"
          type="password"
          placeholder="Password"
        />

        <div className="btn flex flex-wrap gap-4">
          <button className="bg-zinc-800 px-6 py-2 text-white rounded-lg mt-4">
            Update Profile
          </button>
          <button
            onClick={Logoutuserhandler}
            type="button"
            className="bg-zinc-800 px-6 py-2 text-white rounded-lg mt-4"
          >
            Logout
          </button>
          <button
            onClick={Deletehandler}
            type="button"
            className="bg-red-800 px-6 py-2 text-white rounded-lg mt-4"
          >
            Delete
          </button>
        </div>
      </motion.form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
