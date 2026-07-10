import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Container from "./Container";

import training from "../assets/projects/training.png";
import parking from "../assets/projects/parking.png";

const projects = [
  {
    title: "Training Management System",

    image: training,

    description:
      "Role-based web application for managing courses, faculty, students, attendance, daily work reports, approvals and batch allocation using Django.",

    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Bootstrap",
      "Git",
    ],

    github:
      "https://github.com/chrissgeorgek/Training-Management.git",

    live: "#",
  },

  {
    title: "Parking Slot Detection",

    image: parking,

    description:
      "Computer vision project that detects available parking slots using image processing and deep learning techniques for efficient parking management.",

    tech: [
      "Python",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
    ],

    github:
      "https://github.com/chrissgeorgek/YOUR_PARKING_REPO",

    live: "#",
  },
];

function Projects() {
  return (
    <section className="py-12 bg-slate-950">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">

            MORE PROJECTS

          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            Things I've
            <span className="text-blue-500"> Built</span>

          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="rounded-30 overflow-hidden border border-white/10 bg-slate-900 h-full flex flex-col"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-10 flex-1 flex flex-col">

                <h3 className="text-2xl font-bold mb-4">

                  {project.title}

                </h3>

                <p className="text-slate-400 leading-8 mb-8">

                  {project.description}

                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-auto">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition px-6 py-3 font-semibold"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  {/* <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-full border border-slate-700 hover:border-blue-500 transition px-6 py-3"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a> */}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Projects;