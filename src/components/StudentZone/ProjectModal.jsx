import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBookOpen } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-md
          p-6
        "
        style={{ perspective: "2000px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* BOOK */}
        <motion.div
          initial={{ scale: 0.85, rotateX: -15, opacity: 0 }}
          animate={{ scale: 1, rotateX: 0, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.45 }}
          onClick={(e) => e.stopPropagation()}
          style={{ transformStyle: "preserve-3d" }}
          className="
            relative
            w-full
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            shadow-[0_35px_80px_rgba(0,0,0,.45)]
          "
        >
          {/* Wooden Frame */}
          <div
            className="
              rounded-[32px]
              bg-gradient-to-br
              from-[#7A4E2D]
              via-[#A86E3D]
              to-[#6D4526]
              p-5
            "
          >
            {/* Paper */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                bg-[#FCFCFD]
                max-h-[85vh]
                overflow-y-auto
              "
            >
              {/* Paper Texture */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#8b5e34 0.7px, transparent 0.7px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Close */}
              <button
                onClick={onClose}
                className="
                  absolute
                  right-5
                  top-5
                  z-50
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-red-500
                  text-white
                  shadow-lg
                  transition
                  hover:scale-110
                "
              >
                <FaTimes />
              </button>

              {/* Pages */}
              <div className="relative grid lg:grid-cols-2">
                {/* ================= LEFT PAGE (static) ================= */}
                <motion.div
                  initial={{ rotateY: -25, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{
                    transformOrigin: "right center",
                    transformStyle: "preserve-3d",
                    boxShadow: "inset -18px 0 30px -20px rgba(91,55,26,0.35)",
                  }}
                  className="relative p-10"
                >
                  {/* Book Title */}
                  <h2 className="text-4xl font-black text-[#5B371A]">
                    {project.title}
                  </h2>

                  {/* Divider */}
                  <div className="mt-4 h-1 w-28 rounded-full bg-[#B67C4A]" />

                  {/* Screenshot */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="
                      mt-8
                      overflow-hidden
                      rounded-3xl
                      border-8
                      border-white
                      bg-white
                      shadow-2xl
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[420px] w-full object-cover"
                    />
                  </motion.div>

                  {/* Caption */}
                  <p className="mt-4 text-center text-sm font-semibold text-gray-500">
                    Project Preview
                  </p>

                  {/* Decorative Bottom */}
                  <div className="absolute bottom-8 right-8 h-5 w-5 rounded-full bg-[#D4A373]" />
                </motion.div>

                {/* ================= RIGHT PAGE (turns over) ================= */}
                <motion.div
                  initial={{ rotateY: 25, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    boxShadow: "inset 18px 0 30px -20px rgba(91,55,26,0.35)",
                  }}
                  className="
                    relative
                    lg:border-l
                    border-slate-200
                  "
                >
                  <div
                    className="relative min-h-[520px]"
                    style={{ perspective: "1800px" }}
                  >
                    {/* BACK LAYER — tech stack + links, sits underneath, always rendered */}
                    <div className="absolute inset-0 flex flex-col p-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#B67C4A]">
                        Tech Stack
                      </p>

                      {project.techStack?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-full
                                bg-slate-100
                                px-4
                                py-1.5
                                text-sm
                                font-semibold
                                text-[#5B371A]
                                shadow-sm
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex gap-4 pt-10">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-full
                              bg-[#5B371A]
                              px-6
                              py-3
                              text-sm
                              font-semibold
                              text-white
                              shadow-lg
                              transition
                              hover:bg-[#432912]
                            "
                          >
                            <FaGithub /> View Code
                          </motion.a>
                        )}

                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-full
                              bg-[#B67C4A]
                              px-6
                              py-3
                              text-sm
                              font-semibold
                              text-white
                              shadow-lg
                              transition
                              hover:bg-[#9c6a3d]
                            "
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </motion.a>
                        )}
                      </div>

                      {isFlipped && (
                        <button
                          onClick={() => setIsFlipped(false)}
                          className="self-start mt-6 flex items-center gap-2 rounded-full bg-[#F3E8D5] px-5 py-2.5 text-sm font-semibold text-[#5B371A] shadow-sm transition hover:bg-[#EADFC5]"
                        >
                          <FaBookOpen /> Turn back
                        </button>
                      )}

                      <div className="absolute bottom-8 right-8 h-5 w-5 rounded-full bg-[#D4A373]" />
                    </div>

                    {/* FRONT PAGE — description, turns over on click like a real page */}
                    <motion.div
                      className="absolute inset-0 flex flex-col p-10 bg-[#FFF8E8]"
                      style={{
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        cursor: "pointer",
                      }}
                      animate={{ rotateY: isFlipped ? -170 : 0 }}
                      transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                      onClick={() => setIsFlipped(true)}
                    >
                      {/* Curl shadow — sweeps across the page as it turns */}
                      <motion.div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.35) 100%)",
                        }}
                        animate={{ opacity: isFlipped ? [0, 0.9, 0] : 0 }}
                        transition={{ duration: 0.8, times: [0, 0.55, 1] }}
                      />

                      <p className="text-xs font-bold uppercase tracking-widest text-[#B67C4A]">
                        About the Project
                      </p>

                      <p className="mt-4 text-base leading-relaxed text-[#5B371A]/90">
                        {project.description}
                      </p>

                      <div className="mt-auto flex items-center gap-2 self-start rounded-full bg-[#F3E8D5] px-5 py-2.5 text-sm font-semibold text-[#5B371A] shadow-sm transition hover:bg-[#EADFC5]">
                        <FaBookOpen /> Tap to turn page
                      </div>

                      <div className="absolute bottom-8 left-8 h-5 w-5 rounded-full bg-[#D4A373]" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Center Spine */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    hidden
                    h-full
                    w-8
                    -translate-x-1/2
                    lg:block
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(91,55,26,0.18) 0%, rgba(91,55,26,0.05) 15%, transparent 30%, transparent 70%, rgba(91,55,26,0.05) 85%, rgba(91,55,26,0.18) 100%)",
                  }}
                />
              </div>

              {/* Fold Effect */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-full
                  w-4
                  bg-gradient-to-l
                  from-[#F3E8D5]
                  to-transparent
                  opacity-70
                "
              />

              {/* Left Fold */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-full
                  w-4
                  bg-gradient-to-r
                  from-[#F3E8D5]
                  to-transparent
                  opacity-70
                "
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;