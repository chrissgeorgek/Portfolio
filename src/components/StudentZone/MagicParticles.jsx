import { motion } from "framer-motion";
import { useMemo } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const MagicParticles = () => {
  const isMobile = useIsMobile();

  const particles = useMemo(() => {
    const count = isMobile ? 8 : 18;

    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 4 + Math.random() * 8,
      color: ["#FFD93D", "#4ECDC4", "#FF9F68"][
        Math.floor(Math.random() * 3)
      ],
    }));
  }, [isMobile]);

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.left}%`,
            bottom: "-20px",
            width: particle.size,
            height: particle.size,
            background: particle.color,

            // Remove shadow on mobile
            boxShadow: isMobile
              ? "none"
              : "0 0 10px rgba(255,255,255,.5)",
          }}
          animate={{
            y: [-20, -900],
            x: [0, -20, 20, 0],
            opacity: [0, 1, 1, 0],
            scale: [0.4, 1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

export default MagicParticles;