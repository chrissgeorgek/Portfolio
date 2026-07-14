import { motion } from "framer-motion";

import sun from "../../assets/illustrations/studentzone/sun.svg";
import cloud from "../../assets/illustrations/studentzone/cloud.svg";
import birds from "../../assets/illustrations/studentzone/birds.svg";
import road from "../../assets/illustrations/studentzone/road.svg";
import gate from "../../assets/illustrations/studentzone/gate.png";

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Entrance = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ========================================================= */}
      {/*                     SKY BACKGROUND                        */}
      {/* ========================================================= */}

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>

          <linearGradient
            id="skyGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#A8E6FF" />
            <stop offset="35%" stopColor="#C9F2FF" />
            <stop offset="70%" stopColor="#E9FFF6" />
            <stop offset="100%" stopColor="#F7FFF7" />
          </linearGradient>

        </defs>

        {/* Sky */}

        <rect
          width="1920"
          height="1080"
          fill="url(#skyGradient)"
        />

        {/* Back Hills */}

        <path
          d="
          M0,620
          C180,520
          420,520
          650,610

          S1100,540
          1380,600

          S1740,560
          1920,620

          L1920,1080
          L0,1080
          Z
          "
          fill="#9FB8E4"
        />

        {/* Middle Hills */}

        <path
          d="
          M0,720
          C240,620
          520,660
          760,720

          S1260,670
          1500,720

          S1770,690
          1920,740

          L1920,1080
          L0,1080
          Z
          "
          fill="#8CC9A4"
        />

        {/* Front Grass */}

        <path
          d="
          M0,880
          C320,820
          640,850
          960,830

          S1500,840
          1920,820

          L1920,1080
          L0,1080
          Z
          "
          fill="#74D47B"
        />

      </svg>

      {/* ========================================================= */}
      {/*                           SUN                            */}
      {/* ========================================================= */}

      <motion.img
        src={sun}
        alt="Sun"
        className="absolute top-8 right-12
                   w-24 md:w-28 lg:w-36
                   z-10
                   pointer-events-none
                   select-none"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ========================================================= */}
      {/*                       CLOUDS                             */}
      {/* ========================================================= */}

      {/* Cloud 1 */}

      <motion.img
        src={cloud}
        alt=""
        className="absolute
                   top-10
                   -left-40
                   w-56
                   md:w-72
                   opacity-90
                   z-10"
        animate={{
          x: ["0%", "180%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cloud 2 */}

      <motion.img
        src={cloud}
        alt=""
        className="absolute
                   top-32
                   -left-56
                   w-44
                   md:w-60
                   opacity-70
                   z-10"
        animate={{
          x: ["0%", "220%"],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cloud 3 */}

      <motion.img
        src={cloud}
        alt=""
        className="absolute
                   top-20
                   right-0
                   w-52
                   md:w-64
                   opacity-80
                   z-10"
        animate={{
          x: ["20%", "-170%"],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ========================================================= */}
      {/*                       BIRDS                              */}
      {/* ========================================================= */}

      <motion.img
        src={birds}
        alt=""
        className="absolute
                   top-24
                   -left-20
                   w-20
                   md:w-24
                   z-20"
        animate={{
          x: ["0%", "130%"],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.img
        src={birds}
        alt=""
        className="absolute
                   top-40
                   -left-40
                   w-16
                   opacity-70
                   z-20"
        animate={{
          x: ["0%", "140%"],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      />

      {/* ========================================================= */}
      {/*  PART 2 STARTS HERE                                      */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/*                    CAMPUS GATE                           */}
      {/* ========================================================= */}

      <motion.img
        src={gate}
        alt="College Gate"
        className="
          absolute
          bottom-24
          md:bottom-28
          lg:bottom-32
          left-1/2
          -translate-x-1/2
          w-[24rem]
          sm:w-[30rem]
          md:w-[42rem]
          lg:w-[55rem]
          xl:w-[65rem]
          z-30
          pointer-events-none
          select-none
        "
        variants={floating}
        animate="animate"
      />

      {/* ========================================================= */}
      {/*                       ROAD                               */}
      {/* ========================================================= */}

      <motion.img
        src={road}
        alt="Road"
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-72
          md:w-[26rem]
          lg:w-[32rem]
          xl:w-[36rem]
          z-40
          pointer-events-none
          select-none
        "
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: .5,
        }}
      />

      {/* ========================================================= */}
      {/*                    FLOATING SPARKLES                     */}
      {/* ========================================================= */}

      <motion.div
        className="absolute top-28 left-1/4 text-yellow-300 text-2xl z-40"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 180, 360],
          opacity: [.6, 1, .6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute top-40 right-1/4 text-pink-300 text-xl z-40"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -180, -360],
          opacity: [.5, 1, .5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute top-56 left-[18%] text-sky-300 text-xl z-40"
        animate={{
          y: [0, -10, 0],
          opacity: [.5, 1, .5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        ✦
      </motion.div>

      {/* ========================================================= */}
      {/*                    CARTOON TITLE                         */}
      {/* ========================================================= */}

      <motion.div
        className="
          absolute
          top-14
          md:top-20
          left-0
          right-0
          z-50
          flex
          flex-col
          items-center
          px-5
          text-center
          font-fredoka
        "
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >

        {/* Welcome */}

        <motion.h1
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
          "
          style={{
            color: "#FF6B6B",
            letterSpacing: "2px",
            textShadow: `
              4px 4px 0px #FFD93D,
              -2px -2px 0 white,
              2px -2px 0 white,
              -2px 2px 0 white,
              2px 2px 0 white
            `,
          }}
          animate={{
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          Welcome to
        </motion.h1>

        {/* Student Zone */}

        <motion.h2
          className="
            mt-4
            text-6xl
            md:text-8xl
            lg:text-9xl
            font-black
          "
          style={{
            background:
              "linear-gradient(90deg,#FF5F6D,#FFC371,#4ECDC4,#6C63FF,#FF5F6D)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter:
              "drop-shadow(5px 5px 0 rgba(0,0,0,.18))",
            letterSpacing: "4px",
          }}
          animate={{
            scale: [1, 1.04, 1],
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
            },
            backgroundPosition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          Student Zone
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          className="
            mt-6
            max-w-2xl
            text-lg
            md:text-2xl
            lg:text-3xl
            font-semibold
            text-emerald-700
          "
          style={{
            textShadow:
              "2px 2px 0 rgba(255,255,255,.8)",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .8,
          }}
        >
          Build Your Academic Project With Me
        </motion.p>

        {/* CTA */}

        <motion.button
          className="
            mt-10
            rounded-full
            px-10
            py-4
            text-lg
            md:text-xl
            font-bold
            text-white
            shadow-2xl
          "
          style={{
            background:
              "linear-gradient(135deg,#FF6B6B,#FF8E53,#FFD93D)",
          }}
          whileHover={{
            scale: 1.08,
            rotate: -2,
            boxShadow:
              "0px 20px 40px rgba(255,107,107,.45)",
          }}
          whileTap={{
            scale: .95,
          }}
        >
          🚀 Explore Projects
        </motion.button>

      </motion.div>

      {/* ========================================================= */}
      {/*  PART 3 STARTS HERE                                      */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/*               FLOATING DECORATIVE PARTICLES              */}
      {/* ========================================================= */}

      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/60 blur-[2px] z-20"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            left: `${10 + index * 10}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ========================================================= */}
      {/*                 FLOATING BUTTERFLIES                     */}
      {/* ========================================================= */}

      <motion.div
        className="absolute left-[12%] bottom-44 text-3xl z-40"
        animate={{
          x: [0, 25, 0],
          y: [0, -18, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute right-[14%] bottom-52 text-2xl z-40"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🦋
      </motion.div>

      {/* ========================================================= */}
      {/*                     FLOWERS                             */}
      {/* ========================================================= */}

      <div className="absolute bottom-4 left-10 text-3xl z-40">
        🌸🌼🌷
      </div>

      <div className="absolute bottom-4 right-10 text-3xl z-40">
        🌼🌷🌸
      </div>

      {/* ========================================================= */}
      {/*                  SCROLL INDICATOR                        */}
      {/* ========================================================= */}

      <motion.div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          z-50
          flex
          flex-col
          items-center
          text-center
          font-fredoka
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      >
        <p
          className="text-base md:text-lg font-semibold"
          style={{
            color: "#2F855A",
            textShadow: "2px 2px 0 rgba(255,255,255,.8)",
          }}
        >
          Scroll to Enter
        </p>

        <motion.div
          className="mt-2 text-4xl"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          ⬇️
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/*              SOFT OVERLAY FOR DEPTH                      */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black/5
          z-10
        "
      />

    </section>
  );
};

export default Entrance;