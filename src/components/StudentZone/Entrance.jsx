import { motion } from "framer-motion";

import sun from "../../assets/illustrations/studentzone/sun.svg";
import cloud from "../../assets/illustrations/studentzone/cloud.svg";
// import birds from "../../assets/illustrations/studentzone/birds.svg";
import road from "../../assets/illustrations/studentzone/road.svg";
import gate from "../../assets/illustrations/studentzone/gate.png";
import BackButton from "../BackButton";
const Entrance = () => {
  
  return (
    
    <section className="relative min-h-screen overflow-hidden">
<BackButton />
      {/* Sky + Hills — inline SVG, guaranteed wide aspect ratio, flat cartoon style */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8d8f0" />
            <stop offset="60%" stopColor="#d6f0ee" />
            <stop offset="100%" stopColor="#eafaf1" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="1920" height="1080" fill="url(#skyGradient)" />

        {/* Back hill layer */}
        <path
          d="M0,650 Q300,500 640,600 T1280,580 T1920,630 L1920,1080 L0,1080 Z"
          fill="#a3b6d9"
          opacity="0.7"
        />

        {/* Mid hill layer */}
        <path
          d="M0,750 Q400,620 800,700 T1600,680 L1920,720 L1920,1080 L0,1080 Z"
          fill="#8fae9c"
          opacity="0.85"
        />

        {/* Front grass layer */}
        <path
          d="M0,880 Q480,800 960,850 T1920,830 L1920,1080 L0,1080 Z"
          fill="#7fc490"
        />
      </svg>

      {/* Sun */}
      <motion.img
        src={sun}
        alt="Sun"
        className="
absolute
top-4
right-4

sm:top-6
sm:right-8

md:top-8
md:right-16

w-16
sm:w-20
md:w-32

z-10
pointer-events-none
"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Cloud 1 */}
      <motion.img
        src={cloud}
        alt=""
        className="
absolute
top-8
left-0

w-24
sm:w-32
md:w-44

opacity-90
z-10
pointer-events-none
"
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Cloud 2 */}
      <motion.img
        src={cloud}
        alt=""
        className="
absolute
top-20
-left-10

sm:-left-16

md:-left-24

w-20
sm:w-28
md:w-36

opacity-70
"
        animate={{ x: ["0%", "170%"] }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
      />

      {/* Cloud 3 — right side, moving behind the sun */}
      <motion.img
        src={cloud}
        alt=""
        className="
absolute
top-10
right-0

w-24
sm:w-32
md:w-40

opacity-80
"
        animate={{ x: ["20%", "-140%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />

      {/* Birds */}
      {/* <motion.img
        src={birds}
        alt=""
        className="absolute top-24 left-0 w-20 z-10 pointer-events-none"
        animate={{ x: ["-10%", "120%"], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      /> */}

{/* Gate — dominant, bigger still */}
<motion.img
  src={gate}
  alt="Gate"
  className="absolute bottom-12
  sm:bottom-14
  md:bottom-20 md:bottom-13 left-1/2 -translate-x-1/2 w-[22rem]
  sm:w-[30rem]
  md:w-[50rem]
  lg:w-[72rem] z-20"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
/>

{/* Road + Student — single combined SVG, shown fully (not cropped) */}
<motion.img
  src={road}
  alt="Road with student walking toward the gate"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44
  sm:w-56
  md:w-80
  lg:w-[28rem] h-auto object-contain z-30 pointer-events-none"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
/>

      {/* Text — moved toward the top */}
      {/* Cartoon Welcome */}
<motion.div
  className="absolute top-20
  sm:top-16
  md:top-14 left-0 right-0 z-50 flex flex-col items-center text-center px-6"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    fontFamily: "'Fredoka', sans-serif",
  }}
>

  <motion.h1
    className="text-3xl md:text-5xl lg:text-6xl font-bold"
    style={{
      color: "#ff5c8d",
      textShadow: `
      4px 4px #FFD93D,
      -2px -2px white,
      2px -2px white,
      -2px 2px white,
      2px 2px white
      `,
      letterSpacing: "2px",
    }}
    animate={{
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  >
    Welcome to
  </motion.h1>

  <motion.h2
    className="mt-3 text-4xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl font-black"
    style={{
      background:
        "linear-gradient(90deg,#ff5c8d,#FFD93D,#4ECDC4,#7C4DFF,#ff5c8d)",
      backgroundSize: "300% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      filter: "drop-shadow(5px 5px 0 rgba(0,0,0,.18))",
      letterSpacing: "3px",
    }}
    animate={{
      scale: [1, 1.05, 1],
      backgroundPosition: [
        "0%",
        "100%",
        "0%",
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

  <motion.p
    className="mt-5 text-xl md:text-2xl font-semibold"
    style={{
      color: "#2E8B57",
      textShadow: "2px 2px rgba(255,255,255,.7)",
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

  <motion.button
  onClick={() => {
    document
      .getElementById("library")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="mt-8 rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 text-base sm:text-lg md:text-xl text-white font-bold shadow-2xl"
  style={{
    background:
      "linear-gradient(135deg,#FF6B6B,#FF8E53,#FFD93D)",
  }}
  whileHover={{
    scale: 1.08,
    rotate: -2,
  }}
  whileTap={{
    scale: 0.95,
  }}
>
  🚀 Explore Projects
</motion.button>

</motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="
        hidden
        md:block
        
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-center
        z-50
        "
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-gray-700 text-sm">Scroll to Enter</p>
        <div className="text-3xl">↓</div>
      </motion.div>

    </section>
  );
};

export default Entrance;