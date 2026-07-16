import { motion } from "framer-motion";

export default function GateEffects() {
  return (
    <>
      {/* Main Glow */}
      <motion.div
        className="
        absolute
        left-1/2
        bottom-52
        -translate-x-1/2
        w-[850px]
        h-[850px]
        rounded-full
        blur-[180px]
        pointer-events-none
        z-[32]
        "
        style={{
          background:
            "radial-gradient(circle,#67E8F9,transparent 70%)",
          opacity: .14,
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [.08, .16, .08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="
        absolute
        left-1/2
        bottom-40
        -translate-x-1/2
        w-[600px]
        h-[600px]
        rounded-full
        blur-[150px]
        pointer-events-none
        z-[31]
        "
        style={{
          background:
            "radial-gradient(circle,#7C3AED,transparent 70%)",
          opacity: .12,
        }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Left Light Beam */}
      <motion.div
        className="
        absolute
        left-1/2
        bottom-32
        w-[220px]
        h-[700px]
        -translate-x-[260px]
        blur-2xl
        rotate-[12deg]
        z-[30]
        "
        style={{
          background:
            "linear-gradient(to top,transparent,#67E8F9,transparent)",
          opacity:.08,
        }}
        animate={{
          opacity:[.05,.12,.05],
        }}
        transition={{
          duration:5,
          repeat:Infinity,
        }}
      />

      {/* Right Light Beam */}
      <motion.div
        className="
        absolute
        left-1/2
        bottom-32
        w-[220px]
        h-[700px]
        translate-x-[40px]
        blur-2xl
        -rotate-[12deg]
        z-[30]
        "
        style={{
          background:
            "linear-gradient(to top,transparent,#A78BFA,transparent)",
          opacity:.08,
        }}
        animate={{
          opacity:[.05,.12,.05],
        }}
        transition={{
          duration:6,
          repeat:Infinity,
        }}
      />

      {/* Fog */}
      <motion.div
        className="
        absolute
        bottom-0
        left-0
        right-0
        h-[260px]
        blur-[70px]
        z-[33]
        "
        style={{
          background:
            "linear-gradient(to top,rgba(255,255,255,.08),transparent)",
        }}
        animate={{
          opacity:[.2,.4,.2],
        }}
        transition={{
          duration:8,
          repeat:Infinity,
        }}
      />
    </>
  );
}