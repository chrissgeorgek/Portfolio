import { motion } from "framer-motion";

const HangingBoard = () => {
  return (
    <motion.div
      className="flex justify-center mb-16"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      <div className="relative">

        {/* Rope */}

        <div className="absolute -top-8 left-10 h-8 w-1 bg-yellow-700" />

        <div className="absolute -top-8 right-10 h-8 w-1 bg-yellow-700" />

        {/* Board */}

        <motion.div
          animate={{
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            rounded-3xl
            border-4
            border-[#8B5A2B]
            bg-[#C68B59]
            px-16
            py-6
            shadow-2xl
          "
        >
          <h2
            className="
              font-fredoka
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            📚 Student Project Library
          </h2>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HangingBoard;