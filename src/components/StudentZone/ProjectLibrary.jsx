// ProjectLibrary.jsx

import { useState } from "react";
import { motion } from "framer-motion";

import LibraryBackground from "./LibraryBackground";
import Decorations from "./Decorations";
import HangingBoard from "./HangingBoard";
import BookShelf from "./BookShelf";
import PriceBoard from "./PriceBoard";
import ProjectModal from "./ProjectModal";
import MagicParticles from "./MagicParticles";

import studentProjects from "../../data/studentProjects";

const ProjectLibrary = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="library"
      className="relative overflow-hidden bg-[#071827]"
    >
      <LibraryBackground />

      <MagicParticles />

      {/* Top Glow */}
      <div
        className="
        absolute
        left-1/2
        top-0
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[180px]
        "
      />

      <Decorations />

      <div
        className="
        relative
        z-30

        mx-auto

        max-w-7xl

        px-6

        py-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
        >
          <HangingBoard />
        </motion.div>

        <div
          className="
          mt-20

          grid

          gap-14

          lg:grid-cols-[3fr_1fr]
          "
        >
          <BookShelf
            projects={studentProjects}
            onProjectClick={setSelectedProject}
          />

          <div className="flex justify-center lg:justify-end">
            <PriceBoard />
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectLibrary;