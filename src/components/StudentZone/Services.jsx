import { motion } from "framer-motion";

const services = [
  {
    emoji: "🌐",
    title: "Website Development",
    color: "#38BDF8",
    glow: "rgba(56,189,248,.35)",
  },
  {
    emoji: "⚛️",
    title: "React Applications",
    color: "#06B6D4",
    glow: "rgba(6,182,212,.35)",
  },
  {
    emoji: "🐍",
    title: "Python Django",
    color: "#22C55E",
    glow: "rgba(34,197,94,.35)",
  },
  {
    emoji: "🤖",
    title: "Machine Learning",
    color: "#EC4899",
    glow: "rgba(236,72,153,.35)",
  },
  {
    emoji: "📊",
    title: "Data Analytics",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,.35)",
  },
  {
    emoji: "☁️",
    title: "Cloud Deployment",
    color: "#F97316",
    glow: "rgba(249,115,22,.35)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#07111F]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#081220] via-[#0B1730] to-[#050B17]" />

      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -top-60 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[170px]"
      />

      <motion.div
        animate={{
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Stars */}

      {[...Array(70)].map((_, i) => (
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
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Development Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Professional solutions for academic, portfolio, and business
            projects.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              style={{
                boxShadow: `0 0 45px ${service.glow}`,
              }}
            >
              {/* Background Glow */}

              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                style={{
                  background: `radial-gradient(circle at top, ${service.color}, transparent 70%)`,
                }}
              />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-6xl backdrop-blur-xl"
                style={{
                  boxShadow: `0 0 35px ${service.glow}`,
                }}
              >
                {service.emoji}
              </motion.div>

              {/* Title */}

              <h3 className="relative mt-8 text-center text-2xl font-bold text-white">
                {service.title}
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-center text-sm leading-7 text-slate-300">
                Build secure, modern and scalable solutions using current
                technologies with responsive design and clean architecture.
              </p>

              {/* Bottom Accent */}

              <div
                className="relative mx-auto mt-8 h-1 w-20 rounded-full"
                style={{
                  background: service.color,
                  boxShadow: `0 0 18px ${service.glow}`,
                }}
              />
            </motion.div>
          ))}

        </div>
      </div>

      {/* Bottom Ambient Glow */}

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