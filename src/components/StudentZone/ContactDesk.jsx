import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    icon: <FaEnvelope />,
    value: "chrissgeorgek@gmail.com",
    color: "#EF4444",
    glow: "rgba(239,68,68,.35)",
    link: "mailto:chrissgeorgek@gmail.com",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    value: "View Projects",
    color: "#94A3B8",
    glow: "rgba(148,163,184,.35)",
    link: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    value: "Connect",
    color: "#38BDF8",
    glow: "rgba(56,189,248,.35)",
    link: "https://linkedin.com/",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    value: "Chat Now",
    color: "#22C55E",
    glow: "rgba(34,197,94,.35)",
    link: "https://wa.me/917558843749",
  },
];
export default function ContactDesk() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#07111F]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#081220] via-[#0B1730] to-[#050B17]" />

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.3, 0.65, 0.3],
          scale: [1, 1.12, 1],
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

      <div className="relative z-20 mx-auto max-w-6xl px-6 py-24">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Contact Desk
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Have an idea or need a project? Let's build something amazing
            together.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >
          {/* Background Glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_70%)]" />

          {/* Avatar */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-6xl shadow-[0_0_40px_rgba(34,211,238,.35)]"
          >
            👨‍💻
          </motion.div>

          <h3 className="relative mt-8 text-center text-3xl font-bold text-white">
            Hi, I'm Chriss 👋
          </h3>

          <p className="relative mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-300">
            Feel free to reach out for project development, academic guidance,
            portfolio websites, freelance work, or collaborations.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {contacts.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                style={{
                  boxShadow: `0 0 35px ${item.glow}`,
                }}
              >
                {/* Glow */}

                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                  style={{
                    background: `radial-gradient(circle at top, ${item.color}, transparent 70%)`,
                  }}
                />

                <div className="relative flex items-center gap-5">

                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 25px ${item.glow}`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">

                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-slate-300">
                      {item.value}
                    </p>

                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="text-cyan-300"
                  >
                    <FaPaperPlane size={18} />
                  </motion.div>

                </div>
              </motion.a>
            ))}

          </div>

        </motion.div>

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