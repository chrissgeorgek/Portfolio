import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <Link to="/">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-[999]"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
group
relative
flex
items-center
gap-2
md:gap-3

rounded-xl
md:rounded-2xl

border-[3px]
md:border-4

border-[#6B4226]

bg-gradient-to-b
from-[#D49A5A]
via-[#BE8248]
to-[#9B6334]

px-4
py-2

sm:px-5
sm:py-3

md:px-6
md:py-3

text-sm
sm:text-base
md:text-lg

font-bold
text-white
shadow-xl
"
        >
          {/* Wood texture */}
          <div className="absolute inset-0 rounded-xl bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,.08)_50%,transparent_55%)] opacity-30" />

          <motion.span
            animate={{ x: [0, -3, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <FaArrowLeft />
          </motion.span>

          <span className="relative">
            Back to Chriss
          </span>
        </motion.button>
      </motion.div>
    </Link>
  );
};

export default BackButton;