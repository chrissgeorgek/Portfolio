// src/components/LibraryBackground.jsx

import { motion } from "framer-motion";

export default function LibraryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#071827]" />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#071827]
        via-[#10253C]
        to-[#16344C]
        "
      />

      {/* Stars */}
      {Array.from({ length: 120 }).map((_, i) => (
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
            opacity: [.15, .9, .15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Glow */}
      <motion.div
        className="
        absolute
        left-1/2
        top-24
        -translate-x-1/2
        h-[700px]
        w-[700px]
        rounded-full
        blur-[170px]
        "
        style={{
          background:
            "radial-gradient(circle,#67E8F9,transparent 70%)",
          opacity:.12,
        }}
        animate={{
          scale:[1,1.1,1],
        }}
        transition={{
          duration:10,
          repeat:Infinity,
        }}
      />

      {/* Left Window */}
      <div
        className="
        absolute

        left-16

        top-16

        h-72

        w-44

        rounded-3xl

        border

        border-cyan-400/30

        bg-gradient-to-b

        from-cyan-300/40

        via-blue-500/20

        to-transparent

        backdrop-blur-xl

        shadow-[0_0_80px_rgba(103,232,249,.2)]
        "
      >

        <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-300/30"/>

        <div className="absolute top-1/2 left-0 h-px w-full bg-cyan-300/30"/>

      </div>

      {/* Right Window */}

      <div
        className="
        absolute

        right-16

        top-16

        h-72

        w-44

        rounded-3xl

        border

        border-cyan-400/30

        bg-gradient-to-b

        from-cyan-300/40

        via-blue-500/20

        to-transparent

        backdrop-blur-xl

        shadow-[0_0_80px_rgba(103,232,249,.2)]
        "
      >

        <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-300/30"/>

        <div className="absolute top-1/2 left-0 h-px w-full bg-cyan-300/30"/>

      </div>

      {/* Floor */}

      <div
        className="
        absolute

        bottom-0

        h-52

        w-full

        bg-gradient-to-b

        from-[#3B2A20]

        via-[#5B3D2A]

        to-[#24170F]
        "
      />

      {/* Floor Glow */}

      <div
        className="
        absolute

        bottom-40

        left-1/2

        -translate-x-1/2

        h-56

        w-[900px]

        rounded-full

        blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle,#67E8F9,transparent)",
          opacity:.08,
        }}
      />

    </div>
  );
}