// src/components/PriceBoard.jsx

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";

const plans = [
  {
    icon: FaGraduationCap,
    title: "Documentation",
    value: "FREE",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: FaCode,
    title: "Source Code",
    value: "₹299+",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: FaLaptopCode,
    title: "Complete Project",
    value: "Contact",
    color: "from-emerald-500 to-teal-500",
  },
];

const PriceBoard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .7,
      }}
      className="sticky top-28 w-full max-w-sm"
    >
      <div
        className="
        relative

        overflow-hidden

        rounded-[32px]

        border

        border-cyan-400/20

        bg-white/5

        backdrop-blur-2xl

        shadow-[0_25px_70px_rgba(0,0,0,.45)]
        "
      >
        {/* Glow */}

        <div
          className="
          absolute

          -top-20

          left-1/2

          h-56

          w-56

          -translate-x-1/2

          rounded-full

          bg-cyan-400/20

          blur-[120px]
          "
        />

        <div className="relative z-10 p-8">

          <div className="text-center">

            <p
              className="
              text-xs

              uppercase

              tracking-[.4em]

              text-cyan-300
              "
            >
              Student Zone
            </p>

            <h2
              className="
              mt-3

              text-3xl

              font-black

              text-white
              "
            >
              Resources
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              Choose what you need.
            </p>

          </div>

          <div className="mt-8 space-y-4">

            {plans.map((plan) => {

              const Icon = plan.icon;

              return (

                <motion.div
                  key={plan.title}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                  flex

                  items-center

                  gap-4

                  rounded-2xl

                  border

                  border-white/10

                  bg-white/5

                  p-4
                  "
                >

                  <div
                    className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    ${plan.color}
                    text-white
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">

                    <p className="text-sm text-slate-300">
                      {plan.title}
                    </p>

                    <h3 className="font-bold text-white">
                      {plan.value}
                    </h3>

                  </div>

                </motion.div>

              );

            })}

          </div>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: .96,
            }}
            className="
            mt-8

            flex

            w-full

            items-center

            justify-center

            gap-3

            rounded-2xl

            bg-gradient-to-r

            from-cyan-500

            via-blue-600

            to-violet-600

            px-6

            py-4

            font-semibold

            text-white

            shadow-xl
            "
          >
            <FaDownload />

            Download Brochure

          </motion.button>

        </div>

      </div>

    </motion.div>
  );
};

export default PriceBoard;