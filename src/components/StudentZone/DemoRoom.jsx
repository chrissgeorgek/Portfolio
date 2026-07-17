import { motion } from "framer-motion";
import { FaPlay, FaYoutube } from "react-icons/fa";

const videos = [
  {
    title: "Python Django Project",
    emoji: "🐍",
    color: "#22C55E",
    glow: "rgba(34,197,94,.35)",
  },
  {
    title: "React Portfolio",
    emoji: "⚛️",
    color: "#38BDF8",
    glow: "rgba(56,189,248,.35)",
  },
  {
    title: "Machine Learning",
    emoji: "🤖",
    color: "#EC4899",
    glow: "rgba(236,72,153,.35)",
  },
];
export default function DemoRoom() {
  return (
    <section
      id="demo"
      className="relative min-h-screen overflow-hidden bg-[#07111F]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#081220] via-[#0B1730] to-[#050B17]" />

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.3, 0.65, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[170px]"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Heading */}

      <div className="relative z-20 pt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl"
        >
          Demo Room
        </motion.h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Preview live project demonstrations before selecting your project.
        </p>
      </div>

      {/* Main Screen */}

      <div className="relative z-20 mx-auto mt-16 w-[92%] max-w-6xl">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="overflow-hidden rounded-[34px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl"
        >
          <div className="aspect-video flex flex-col items-center justify-center">

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-red-500 shadow-[0_0_45px_rgba(239,68,68,.6)]"
            >
              <FaPlay
                size={42}
                className="ml-2 text-white"
              />
            </motion.div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Live Project Demonstrations
            </h3>

            <p className="mt-4 text-slate-300">
              Demo videos can be embedded from YouTube here.
            </p>

          </div>
        </motion.div>
      </div>

      {/* Cards */}

      <div className="relative z-20 mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-3">
      {videos.map((video, index) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            style={{
              boxShadow: `0 0 45px ${video.glow}`,
            }}
          >
            {/* Background Glow */}

            <div
              className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
              style={{
                background: `radial-gradient(circle at top, ${video.color}, transparent 70%)`,
              }}
            />

            {/* Icon */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-6xl backdrop-blur-xl"
              style={{
                boxShadow: `0 0 35px ${video.glow}`,
              }}
            >
              {video.emoji}
            </motion.div>

            {/* Title */}

            <h3 className="relative mt-8 text-center text-2xl font-bold text-white">
              {video.title}
            </h3>

            <p className="relative mt-4 text-center text-sm leading-7 text-slate-300">
              Watch a complete walkthrough of the project, architecture,
              features, source code, and deployment process.
            </p>

            {/* Watch Button */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative mx-auto mt-8 flex items-center gap-3 rounded-xl border border-red-500/40 bg-red-500/20 px-6 py-3 font-semibold text-red-300 transition-all hover:bg-red-500/30"
            >
              <FaYoutube />
              Watch Demo
            </motion.button>
          </motion.div>
        ))}

      </div>
      <div className="absolute bottom-0 left-1/2 h-64 w-[90%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

{/* Background Grid */}

<div
  className="pointer-events-none absolute inset-0 opacity-[0.05]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

{/* Animated Scan Line */}

<motion.div
  className="pointer-events-none absolute left-0 right-0 h-px bg-cyan-300/40"
  animate={{
    top: ["0%", "100%"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
/>
</section>
);
}