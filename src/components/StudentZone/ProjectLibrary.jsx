import { useState } from "react";

import LibraryBackground from "./LibraryBackground";
import Decorations from "./Decorations";
import HangingBoard from "./HangingBoard";
import BookShelf from "./BookShelf";
import PriceBoard from "./PriceBoard";
import ProjectModal from "./ProjectModal";

import studentProjects from "../../data/studentProjects";
import MagicParticles from "./MagicParticles";

const ProjectLibrary = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="library"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <LibraryBackground />

      <MagicParticles />

      {/* Decorations */}
      <Decorations />

      {/* Main Content */}
      <div className="
relative
z-30

mx-auto
max-w-7xl

px-4
sm:px-6
lg:px-8

py-12
sm:py-16
md:py-20
">

        {/* Title */}
        <HangingBoard />

        {/* Books + Price Board */}
        <div className="mt-10
sm:mt-16
md:mt-20 grid gap-12 lg:grid-cols-[3fr_1fr]">

          <BookShelf
            projects={studentProjects}
            onProjectClick={setSelectedProject}
          />

          <div className="flex justify-center lg:justify-end">
            <PriceBoard />
          </div>

        </div>

      </div>

      {/* Project Modal */}

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