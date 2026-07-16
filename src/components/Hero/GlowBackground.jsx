import { motion } from "framer-motion";

const glows = [
  {
    top: "8%",
    left: "12%",
    size: 420,
    color: "#5EEAD4",
    opacity: 0.12,
    duration: 12,
  },
  {
    top: "55%",
    left: "70%",
    size: 520,
    color: "#FF6B6B",
    opacity: 0.08,
    duration: 18,
  },
  {
    top: "18%",
    right: "8%",
    size: 320,
    color: "#818CF8",
    opacity: 0.12,
    duration: 10,
  },
];

export default function GlowBackground() {
  return (
    <>
      {/* Main Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#071826]
        via-[#0D2233]
        to-[#18384D]
        "
      />

      {/* Animated Glows */}
      {glows.map((glow, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-[140px]"
          style={{
            ...glow,
            width: glow.size,
            height: glow.size,
            background: glow.color,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [
              glow.opacity,
              glow.opacity + 0.05,
              glow.opacity,
            ],
          }}
          transition={{
            duration: glow.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Noise */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </>
  );
}