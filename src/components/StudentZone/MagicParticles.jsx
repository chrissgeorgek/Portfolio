import { motion } from "framer-motion";

const particles = [...Array(18)];

const MagicParticles = () => {
  return (
    <>
      {particles.map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 6;
        const size = 4 + Math.random() * 8;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              bottom: "-20px",
              width: size,
              height: size,
              background:
                index % 3 === 0
                  ? "#FFD93D"
                  : index % 3 === 1
                  ? "#4ECDC4"
                  : "#FF9F68",
              boxShadow: "0 0 15px rgba(255,255,255,.8)",
            }}
            animate={{
              y: [-20, -900],
              x: [0, -30, 30, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.3, 1, 0.8],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </>
  );
};

export default MagicParticles;