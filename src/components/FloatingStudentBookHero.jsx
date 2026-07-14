import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const FloatingStudentBookHero = () => {
  return (
    <Link to="/student-zone">

      <motion.div
        className="relative cursor-pointer"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
        }}
        style={{
          perspective: "1000px",
        }}
      >

        {/* Glow */}

        <motion.div
          className="
            absolute
            -inset-4
            rounded-full
            bg-cyan-400/30
            blur-3xl
          "
          animate={{
            opacity: [.5,.9,.5],
            scale:[1,1.15,1]
          }}
          transition={{
            duration:2.5,
            repeat:Infinity
          }}
        />

        {/* Sparkles */}

        <motion.div
          className="absolute -top-5 left-3 text-yellow-300 text-lg"
          animate={{
            y:[0,-8,0],
            rotate:[0,15,0]
          }}
          transition={{
            duration:2,
            repeat:Infinity
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute top-3 -right-4 text-sm"
          animate={{
            y:[0,6,0]
          }}
          transition={{
            duration:2.5,
            repeat:Infinity
          }}
        >
          ⭐
        </motion.div>

        {/* Shadow */}

        <motion.div
          className="
            absolute
            left-1/2
            -bottom-5
            h-3
            w-24
            -translate-x-1/2
            rounded-full
            bg-black/25
            blur-md
          "
          whileHover={{
            width:110
          }}
        />

        {/* Book */}

        <motion.div
          whileHover={{
            rotateY:-18,
            rotate:-2
          }}
          transition={{
            type:"spring",
            stiffness:180
          }}
          style={{
            transformStyle:"preserve-3d",
            transformOrigin:"left center"
          }}
          className="
            relative
            h-[170px]
            w-[120px]
          "
        >

          {/* Back Cover */}

          <div
            className="
              absolute
              inset-0
              rounded-r-xl
              rounded-l-md
              bg-gradient-to-br
              from-indigo-700
              via-blue-700
              to-cyan-700
            "
          />

          {/* Pages */}

          <div
            className="
              absolute
              right-1
              top-2
              h-[156px]
              w-2
              rounded-r
              bg-gradient-to-b
              from-white
              to-slate-300
            "
          />

          {/* Bookmark */}

          <motion.div
            animate={{
              y:[0,4,0]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
            className="
              absolute
              right-5
              top-full
              -mt-2
              h-8
              w-2
              rounded-b
              bg-red-500
            "
          />

          {/* Front Cover */}

          <motion.div
            whileHover={{
              rotateY:-25
            }}
            transition={{
              type:"spring",
              stiffness:220
            }}
            style={{
              transformStyle:"preserve-3d",
              transformOrigin:"left center"
            }}
            className="
              absolute
              inset-0
              overflow-hidden
              rounded-r-xl
              rounded-l-md
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-indigo-700
              shadow-2xl
            "
          >

            {/* Spine */}

            <div className="absolute left-0 top-0 h-full w-4 bg-black/20"/>

            {/* Highlight */}

            <div className="absolute left-4 top-0 h-full w-[2px] bg-white/40"/>

            {/* Shine */}

            <motion.div
              initial={{x:"-120%"}}
              whileHover={{x:"150%"}}
              transition={{duration:.8}}
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />
                        {/* NEW Badge */}

<motion.div
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
    absolute
    right-2
    top-2
    rounded-full
    bg-yellow-400
    px-2
    py-[2px]
    text-[9px]
    font-black
    text-gray-800
    shadow-lg
  "
>
  NEW
</motion.div>

{/* Book Icon */}

<motion.div
  animate={{
    y: [0, -3, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="mt-5 flex justify-center"
>
  <div
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white/20
      backdrop-blur-sm
    "
  >
    <FaBookOpen className="text-2xl text-yellow-300" />
  </div>
</motion.div>

{/* Title */}

<div className="mt-4 px-3 text-center">

  <motion.h3
    animate={{
      y: [0, -2, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      text-lg
      font-black
      text-white
      drop-shadow-lg
    "
  >
    Student
  </motion.h3>

  <motion.h3
    animate={{
      y: [0, 2, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      text-xl
      font-black
      text-yellow-300
      drop-shadow-lg
    "
  >
    Zone
  </motion.h3>

</div>

{/* Divider */}

<div className="mx-auto mt-3 h-[2px] w-16 rounded-full bg-white/30" />

{/* Description */}

<p
  className="
    mt-3
    px-3
    text-center
    text-[10px]
    font-semibold
    leading-4
    text-white
  "
>
  Academic
  <br />
  Projects
  <br />
  React • Django
</p>

{/* Bottom Button */}

<motion.div
  whileHover={{
    scale: 1.05,
  }}
  className="
    absolute
    bottom-3
    left-2
    right-2
  "
>
  <div
    className="
      rounded-full
      bg-white
      py-2
      text-center
      shadow-lg
    "
  >
    <motion.span
      animate={{
        x: [0, 4, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
      }}
      className="
        text-[10px]
        font-bold
        text-indigo-700
      "
    >
      Enter →
    </motion.span>
  </div>
</motion.div>
</motion.div>

</motion.div>

{/* Caption */}

<motion.div
  className="mt-6 text-center"
  animate={{
    opacity: [0.7, 1, 0.7],
    y: [0, -2, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  <span
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      px-3
      py-1
      text-[11px]
      font-bold
      text-white
      shadow-lg
    "
  >
    🚀 Quick Access
  </span>

</motion.div>

</motion.div>

</Link>
);
};

export default FloatingStudentBookHero;