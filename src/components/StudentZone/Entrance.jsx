import { motion } from "framer-motion";

import BackButton from "../BackButton";
import GlowBackground from "../Hero/GlowBackground";
import RotatingRings from "../Hero/RotatingRings";
import FloatingObjects from "../Hero/FloatingObjects";
import ParticleLayer from "../Hero/ParticleLayer";
import GateEffects from "../Hero/GateEffects";
import HeroFrame from "../Hero/HeroFrame";

import sun from "../../assets/illustrations/studentzone/sun.svg";
import road from "../../assets/illustrations/studentzone/road.svg";
import gate from "../../assets/illustrations/studentzone/gate.png";

const Entrance = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <BackButton />

      <GlowBackground />
      <ParticleLayer />
      <RotatingRings />
      <HeroFrame />
      <FloatingObjects />
      <GateEffects />

      {/* Decorative Moon */}
      <motion.img
        src={sun}
        alt=""
        className="
        absolute
        top-10
        right-10
        w-24
        md:w-36
        opacity-20
        mix-blend-screen
        z-10
        pointer-events-none
        "
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
          },
        }}
      />

      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        z-10
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.05), transparent 70%)",
        }}
      />

      {/* Gate */}
      <motion.img
        src={gate}
        alt="Gate"
        className="
absolute
bottom-12
left-1/2
-translate-x-1/2

w-[22rem]
sm:w-[30rem]
md:w-[48rem]
lg:w-[65rem]

drop-shadow-[0_0_60px_rgba(255,255,255,.15)]

z-[40]
"
        style={{
          filter: "brightness(.82) contrast(1.08) saturate(.9)",
        }}
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Road */}
      <motion.img
        src={road}
        alt="Road"
        className="
        absolute

        bottom-0

        left-1/2

        -translate-x-1/2

        w-44

        sm:w-56

        md:w-80

        lg:w-[28rem]

        h-auto

        object-contain

        z-40

        pointer-events-none
        "
        style={{
          filter: "drop-shadow(0 0 35px rgba(255,255,255,.12))",
        }}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      />
      {/* Hero Content */}
      <motion.div
        className="
  absolute
  inset-0
  z-[70]

  flex
  flex-col
  justify-start pt-24 md:pt-20
  items-center

  text-center

  px-6
  "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
    mb-5

    px-5

    py-2

    rounded-full

    border

    border-cyan-400/30

    bg-white/5

    backdrop-blur-md
    "
        >
          <span
            className="
      text-cyan-300

      tracking-[.35em]

      uppercase

      text-xs

      font-semibold
      "
          >
            Interactive Learning Hub
          </span>
        </motion.div>

        <motion.h1
          className="
    text-5xl

    sm:text-6xl

    md:text-7xl

    lg:text-[7rem]

    font-black

    leading-none
    "
          style={{
            background:
              "linear-gradient(90deg,#FFFFFF,#67E8F9,#A78BFA,#FFFFFF)",
            backgroundSize: "400% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(255,255,255,.15))",
          }}
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Student Zone
        </motion.h1>

        <motion.div
          className="
    mt-6

    h-[2px]

    w-40

    rounded-full
    "
          style={{
            background: "linear-gradient(90deg,#67E8F9,#A78BFA)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8 }}
        />

        <motion.p
          className="
    mt-8

    max-w-3xl

    text-slate-400

    text-lg

    md:text-2xl

    leading-relaxed
    "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Explore project ideas.
        </motion.p>

{/* button */}
        <div className="mt-4 flex gap-5 flex-wrap justify-center">
          <motion.button
            onClick={() =>
              document.getElementById("library")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
      px-10

      py-4

      rounded-full

      font-semibold

      text-white
      "
            style={{
              background: "linear-gradient(135deg,#2563EB,#7C3AED)",
              boxShadow: "0 0 35px rgba(124,58,237,.35)",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Explore Projects
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="
        hidden

        md:flex

        absolute

        bottom-8

        left-1/2

        -translate-x-1/2

        flex-col

        items-center

        gap-2

        text-slate-300

        z-50
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <p className="text-sm tracking-[0.25em] uppercase">Scroll</p>

        <div className="text-3xl">↓</div>
      </motion.div>
    </section>
  );
};

export default Entrance;
