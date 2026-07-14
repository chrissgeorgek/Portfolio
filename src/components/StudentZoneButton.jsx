import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentZoneButton = () => {
  return (
    <div className="flex justify-center py-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        {/* NEW Badge */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            -top-10
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-yellow-400
            px-5
            py-2
            font-fredoka
            font-bold
            text-gray-800
            shadow-lg
            z-20
          "
        >
          ✨ NEW
        </motion.div>

        <Link to="/student-zone">

          <motion.div
            whileHover={{
              y: -12,
              rotate: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="group cursor-pointer"
          >

            {/* Glow */}

            <div
              className="
                absolute
                -inset-4
                rounded-3xl
                bg-cyan-300/30
                blur-3xl
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Book */}

            <div
              className="
                relative
                h-80
                w-56
                overflow-hidden
                rounded-r-3xl
                rounded-l-lg
                bg-gradient-to-br
                from-[#5B8DEF]
                via-[#4ECDC4]
                to-[#6C63FF]
                shadow-2xl
              "
            >

              {/* Spine */}

              <div className="absolute left-0 top-0 h-full w-8 bg-black/20" />

              {/* Spine Highlight */}

              <div className="absolute left-8 top-0 h-full w-[2px] bg-white/40" />

              {/* Shine */}

              <div
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  group-hover:translate-x-full
                  transition-all
                  duration-700
                "
              />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="pt-10 text-center text-7xl"
              >
                📚
              </motion.div>

              {/* Title */}

              <div className="mt-8 text-center">

                <h2 className="font-fredoka text-4xl font-bold text-white">
                  Student
                </h2>

                <h2 className="font-fredoka text-4xl font-bold text-yellow-300">
                  Zone
                </h2>

              </div>

              {/* Divider */}

              <div className="mx-auto mt-8 h-[2px] w-36 bg-white/30" />

              {/* Description */}

              <p className="mt-6 px-6 text-center font-fredoka text-lg text-white">

                Academic

                <br />

                Projects

              </p>

              {/* Bottom */}

              <motion.div
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-8
                  left-0
                  right-0
                  text-center
                  font-fredoka
                  font-bold
                  text-white
                "
              >
                Click to Enter →
              </motion.div>

            </div>

            {/* Shadow */}

            <motion.div
              className="
                mx-auto
                mt-5
                h-3
                w-36
                rounded-full
                bg-black/20
                blur-lg
              "
              whileHover={{
                width: 170,
              }}
            />

          </motion.div>

        </Link>

        {/* Caption */}

        <motion.p
          className="
            mt-8
            text-center
            font-fredoka
            text-xl
            font-semibold
            text-gray-700
          "
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Explore My Academic Project Collection
        </motion.p>

      </motion.div>

    </div>
  );
};

export default StudentZoneButton;