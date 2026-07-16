// src/components/BookCard.jsx

import { motion } from "framer-motion";

const BookCard = ({ project, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(project)}
      className="group relative cursor-pointer"
      whileHover={{
        y: -18,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      style={{
        perspective: "1500px",
      }}
    >
      {/* Shadow */}

      <motion.div
        className="
        absolute

        left-1/2

        -bottom-5

        h-5

        w-40

        -translate-x-1/2

        rounded-full

        bg-cyan-400/20

        blur-xl
        "
        whileHover={{
          scale: 1.3,
          opacity: .8,
        }}
      />

      {/* Spine */}

      <div
        className="
        absolute

        left-0

        top-2

        z-30

        h-[94%]

        w-4

        rounded-l-xl

        bg-gradient-to-b

        from-[#1F2937]

        via-[#334155]

        to-[#111827]
        "
      />

      {/* Book */}

      <motion.div
        whileHover={{
          rotateY: -12,
        }}
        transition={{
          duration: .35,
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          background: project.color,
        }}
        className="
        relative

        overflow-hidden

        rounded-2xl

        border

        border-white/10

        shadow-[0_25px_60px_rgba(0,0,0,.45)]

        backdrop-blur-xl
        "
      >
        {/* Glow */}

        <div
          className="
          absolute

          inset-0

          bg-gradient-to-br

          from-white/10

          via-transparent

          to-cyan-300/10
          "
        />

        {/* Shine */}

        <motion.div
          className="
          absolute

          inset-0

          bg-gradient-to-r

          from-transparent

          via-white/20

          to-transparent
          "
          initial={{
            x: "-120%",
          }}
          whileHover={{
            x: "150%",
          }}
          transition={{
            duration: .8,
          }}
        />

        {/* Page Edge */}

        <div
          className="
          absolute

          right-0

          top-0

          h-full

          w-3

          bg-gradient-to-l

          from-white

          via-slate-100

          to-transparent
          "
        />

        {/* Image */}

        <div className="overflow-hidden">

          <motion.img
            src={project.image}
            alt={project.title}
            className="
            h-48

            w-full

            object-cover
            "
            whileHover={{
              scale: 1.12,
            }}
            transition={{
              duration: .5,
            }}
          />

        </div>

        {/* Content */}

        <div className="relative z-20 p-5">

          <h3
            className="
            text-lg

            font-bold

            text-white

            line-clamp-2
            "
          >
            {project.title}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">

            {project.technologies.map((tech) => {

              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    rotate: 15,
                    scale: 1.15,
                  }}
                  className="
                  flex

                  h-10

                  w-10

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-cyan-300/20

                  bg-white/10

                  backdrop-blur-xl
                  "
                >
                  <Icon
                    size={18}
                    className="text-cyan-200"
                  />
                </motion.div>
              );

            })}

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span
              className="
              rounded-full

              bg-emerald-500/20

              border

              border-emerald-400/20

              px-4

              py-1.5

              text-xs

              font-semibold

              text-emerald-300
              "
            >
              Completed
            </span>

            <motion.div
              whileHover={{
                x: 4,
              }}
              className="
              text-sm

              font-semibold

              text-cyan-300
              "
            >
              View →
            </motion.div>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
};

export default BookCard;