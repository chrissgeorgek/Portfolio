import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const HangingBoard = () => {
  return (
    <motion.div
      className="flex justify-center mb-14"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">

        {/* Chains */}
        <div className="absolute left-10 -top-12 h-12 w-[2px] bg-gradient-to-b from-gray-400 to-gray-700" />
        <div className="absolute right-10 -top-12 h-12 w-[2px] bg-gradient-to-b from-gray-400 to-gray-700" />

        {/* Hooks */}
        <div className="absolute left-[34px] -top-[54px] h-4 w-4 rounded-full border-2 border-gray-400" />
        <div className="absolute right-[34px] -top-[54px] h-4 w-4 rounded-full border-2 border-gray-400" />

        {/* Board */}
        <motion.div
          animate={{ rotate: [-0.5, 0.5, -0.5] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-[#10253C]
            via-[#183A57]
            to-[#0C2035]
            px-10
            py-6
            shadow-[0_20px_50px_rgba(0,0,0,.45)]
            w-full
            max-w-3xl
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-400/5" />

          {/* Shine */}
          <motion.div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
            initial={{ x: "-120%" }}
            animate={{ x: "140%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />

          <div className="relative z-10 flex flex-col items-center">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
              <FaBookOpen size={22} />
            </div>

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.4em]
                text-cyan-300
              "
            >
              STUDENT ZONE
            </p>

            <h2
              className="
                mt-2
                text-3xl
                md:text-4xl
                font-black
                text-white
              "
            >
              Project Library
            </h2>

            <div
              className="
                mt-4
                h-[2px]
                w-24
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-cyan-400
              "
            />

            <p
              className="
                mt-4
                max-w-lg
                text-center
                text-sm
                md:text-base
                text-slate-300
                leading-relaxed
              "
            >
              Browse premium academic projects, source code,
              documentation and implementation details.
            </p>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HangingBoard;