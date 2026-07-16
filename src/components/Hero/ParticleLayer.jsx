// src/components/Hero/Particles.jsx

import { motion } from "framer-motion";

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-25">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "white",
            boxShadow: "0 0 10px rgba(255,255,255,.8)",
            opacity: 0.25,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            scale: [1, 1.8, 1],
            opacity: [0.15, 0.9, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: 40,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,#5EEAD4,transparent)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.15,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0.4, 1.3, 0.4],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}