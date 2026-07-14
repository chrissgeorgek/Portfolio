import { motion } from "framer-motion";

const BookCard = ({ project, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(project)}
      whileHover={{
        y: -18,
        rotate: -4,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
      }}
      className="relative cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Shadow */}

      <motion.div
        className="
          absolute
          left-1/2
          -bottom-4
          h-4
          w-40
          -translate-x-1/2
          rounded-full
          bg-black/20
          blur-md
        "
        whileHover={{
          scale: 1.1,
        }}
      />

      {/* Spine */}

      <div
        className="
          absolute
          left-0
          top-2
          z-20
          h-[92%]
          w-4
          rounded-l-xl
          bg-gradient-to-b
          from-[#5A3E24]
          via-[#7B5635]
          to-[#4A311A]
        "
      />

      {/* Book */}

      <motion.div
        whileHover={{
          rotateY: -12,
        }}
        transition={{
          duration: .3,
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          background: project.color,
        }}
        className="
          relative
          overflow-hidden
          rounded-xl
          shadow-2xl
        "
      >
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
            via-gray-100
            to-transparent
          "
        />

        {/* Shine */}

        <motion.div
          initial={{
            x: "-120%",
          }}
          whileHover={{
            x: "150%",
          }}
          transition={{
            duration: .8,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
          "
        />

        {/* Screenshot */}

        <div className="h-44 overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-500
              hover:scale-110
            "
          />

        </div>

        {/* Content */}

        <div className="p-4">

          <h3 className="font-bold text-lg text-white line-clamp-2">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">

            {project.technologies.map((tech) => {

              const Icon = tech.icon;

              return (

                <div
                  key={tech.name}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    p-2
                    backdrop-blur
                  "
                >
                  <Icon
                    size={18}
                    className="text-white"
                  />
                </div>

              );

            })}

          </div>

          <div className="mt-5">

            <span
              className="
                rounded-full
                bg-green-500
                px-3
                py-1
                text-xs
                font-bold
                text-white
              "
            >
              ✓ Completed
            </span>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
};

export default BookCard;