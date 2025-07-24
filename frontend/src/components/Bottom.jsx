import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
const Bottom = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20">

        {/* ABOUT PRIME */}
        <motion.div 
          className="space-y-4 md:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold tracking-wide">ABOUT PRIME</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            PRIME was developed to fill the void where great taste meets function. 
            With bold, thirst-quenching flavors to help you refresh, replenish, and refuel, 
            PRIME is the perfect boost for any endeavor. We’re confident you’ll love it as much as we do.
          </p>
          <div className="flex gap-4 text-xl pt-2">
            <FaFacebookF className="hover:text-[#4267B2] transition" />
            <FaInstagram className="hover:text-[#E1306C] transition" />
            <FaTiktok className="hover:text-[#010101] transition" />
            <FaXTwitter className="hover:text-[#1DA1F2] transition" />
          </div>
        </motion.div>

        {/* LINKS */}
        <motion.div 
          className="text-sm space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p>RAPID REHYDRATION</p>
          <p>ICE HYDRATION</p>
          <p>HYDRATION</p>
          <p>HYDRATION+ STICKS</p>
          <p>ENERGY</p>
        </motion.div>

        <motion.div 
          className="text-sm space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>ABOUT PRIME</p>
          <p>TEAM + ATHLETES</p>
          <p>CREATORS</p>
          <p>ARTISTS</p>
          <p>AMBASSADORS</p>
        </motion.div>

        <motion.div 
          className="text-sm space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p>FAQS</p>
          <p>PRIVACY POLICY</p>
          <p>RETURN POLICY</p>
          <p>WHERE TO BUY</p>
          <p>CONTACT US</p>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div 
          className="space-y-4 md:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold tracking-wide">NEWSLETTER</h2>
          <p className="text-sm text-gray-300">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-black rounded outline-none"
          />
          <p className="text-xs text-gray-400 leading-snug">
            By subscribing, you consent to receive marketing communications from PRIME using the provided email address and phone number. Consent to receive marketing is not required for purchase. Standard data and messaging rates may apply. You can opt-out at any time by contacting us or using the unsubscribe link. See our Privacy Policy for details.
          </p>
          <button className="bg-white text-black font-bold px-6 py-2 rounded uppercase tracking-wider hover:scale-105 transition-all">
            Subscribe
          </button>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center text-xs mt-10 text-gray-500 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>© Prime Hydration LLC</p>
        <div className="flex flex-wrap gap-6 text-xs">
          <p className="hover:underline cursor-pointer">Cookie Choices</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Accessibility Statement</p>
          <p className="hover:underline cursor-pointer">Contact</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Bottom