import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import {
  FaBookOpen,
  FaLaptopCode,
  FaVideo,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const places = [
  {
    title: "Project Library",
    subtitle: "Completed Projects",
    icon: FaBookOpen,
    target: "library",
    color: "#38BDF8",
    glow: "rgba(56,189,248,.35)",
  },
  {
    title: "Services",
    subtitle: "Development Services",
    icon: FaLaptopCode,
    target: "services",
    color: "#A855F7",
    glow: "rgba(168,85,247,.35)",
  },
  {
    title: "Demo Lab",
    subtitle: "Watch Live Projects",
    icon: FaVideo,
    target: "demo",
    color: "#22C55E",
    glow: "rgba(34,197,94,.35)",
  },
  {
    title: "Contact Desk",
    subtitle: "Let's Work Together",
    icon: FaHeadset,
    target: "contact",
    color: "#F97316",
    glow: "rgba(249,115,22,.35)",
  },
];

export default function CampusNavigation() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111F]">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#081220] via-[#0C1830] to-[#040A15]" />

      {/* Aurora Glow */}

      <motion.div
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -top-60 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[170px]"
      />

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[160px]"
      />

      {/* Stars */}

      {[...Array(90)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Student Zone Campus
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Explore every section through an interactive futuristic campus.
          </p>
        </motion.div>

        {/* Navigation Area */}

        <div className="relative mt-24 flex items-center justify-center">

          {/* Main Hub */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-10 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-xl"
          >
            <div className="h-14 w-14 rounded-full bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,.9)]" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="absolute h-[2px] w-[65%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <div className="absolute h-[65%] w-[2px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

          </div>

          {/* Navigation Buildings */}

          <div className="grid w-full max-w-5xl grid-cols-2 gap-12 md:gap-20">

            {places.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollLink
                  key={item.title}
                  to={item.target}
                  smooth
                  duration={700}
                  offset={-60}
                >
                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.04,
                    }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                    className="cursor-pointer flex justify-center"
                  >
                    <div
                      className="relative w-56 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl overflow-hidden"
                      style={{
                        boxShadow: `0 0 45px ${item.glow}`,
                      }}
                    >
                      {/* Glow */}

                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: `radial-gradient(circle at top, ${item.color}, transparent 70%)`,
                        }}
                      />

                      {/* Icon */}

                      <div
                        className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 35px ${item.glow}`,
                        }}
                      >
                        <Icon
                          size={36}
                          className="text-white"
                        />
                      </div>

                      {/* Title */}

                      <h3 className="relative mt-6 text-center text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="relative mt-2 text-center text-slate-300">
                        {item.subtitle}
                      </p>

                      {/* Button */}

                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="relative mt-7 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-cyan-300"
                      >
                        Explore
                        <FaArrowRight />
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollLink>
              );
            })}
          </div>

        </div>
        </div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-1/2 h-56 w-[90%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Ambient Grid */}

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