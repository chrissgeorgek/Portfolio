import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Container from "./Container";
import useProjects from "../hooks/useProjects";
import { iconMap } from "../utils/IconMap";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Projects() {

  const { projects, loading } = useProjects();

  if (loading) {

    return (
      <section className="py-12 bg-slate-950">

        <Container>

          <div className="flex justify-center">

            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          </div>

        </Container>

      </section>
    );

  }

  const otherProjects = projects.filter(

    project =>

      project.is_active &&

      !project.featured

  );

  if (otherProjects.length === 0) {

    return null;

  }

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

            <span className="text-blue-500">

              {" "}Built

            </span>

          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {

            otherProjects.map((project, index) => (

              <motion.div

                key={project.id}

                initial={{ opacity: 0, y: 60 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: index * .15 }}

                viewport={{ once: true }}

                whileHover={{ y: -12 }}

                className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900 h-full flex flex-col"

              >

                <div className="overflow-hidden">

                  {

                    project.project_image ?

                      (

                        <img

                          src={project.project_image}

                          alt={project.title}

                          className="w-full h-56 object-cover hover:scale-105 transition duration-500"

                        />

                      )

                      :

                      (

                        <div className="w-full h-56 bg-slate-800"></div>

                      )

                  }

                </div>

                <div className="p-10 flex-1 flex flex-col">

                  <h3 className="text-2xl font-bold mb-4">

                    {project.title}

                  </h3>

                  <p className="text-slate-400 leading-8 mb-8">

                    {project.short_description}

                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">

                    {

                      project.technologies.map((tech) => {

                        const Icon = iconMap[tech.icon];

                        return (

                          <span

                            key={tech.id}

                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"

                          >

                            {

                              Icon &&

                              <Icon />

                            }

                            {tech.name}

                          </span>

                        );

                      })

                    }

                  </div>

                  <div className="flex gap-4 mt-auto flex-wrap">

                    {

                      project.github_url &&

                      (

                        <a

                          href={project.github_url}

                          target="_blank"

                          rel="noreferrer"

                          className="flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition px-6 py-3 font-semibold"

                        >

                          <FaGithub />

                          GitHub

                        </a>

                      )

                    }

                    {

                      project.live_demo_url &&

                      (

                        <a

                          href={project.live_demo_url}

                          target="_blank"

                          rel="noreferrer"

                          className="flex items-center gap-2 rounded-full border border-slate-700 hover:border-blue-500 transition px-6 py-3"

                        >

                          <FaExternalLinkAlt />

                          Live Demo

                        </a>

                      )

                    }

                  </div>

                </div>

              </motion.div>

            ))

          }
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: otherProjects.length * 0.15 }}
  viewport={{ once: true }}
  whileHover={{ y: -12, scale: 1.02 }}
  className="rounded-3xl overflow-hidden border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md h-full flex flex-col"
>
  {/* Top */}

  <div className="h-56 flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 relative overflow-hidden">

    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="text-center"
    >
      <FaBookOpen className="mx-auto text-7xl text-white mb-4" />

      <h3 className="font-fredoka text-4xl font-bold text-white">
        Student Zone
      </h3>
    </motion.div>

    <div className="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">
      NEW
    </div>

  </div>

  {/* Body */}

  <div className="p-10 flex flex-col flex-1">

    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
      Cartoon Academic Library
    </h3>

    <p className="text-slate-300 leading-8 flex-1">
      Explore interactive academic projects including Django,
      React, MERN Stack, Machine Learning, Java and more in a
      fun cartoon-style campus.
    </p>

    <div className="flex flex-wrap gap-2 mt-8 mb-8">

      <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
        React
      </span>

      <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
        Tailwind
      </span>

      <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
        Framer Motion
      </span>

    </div>

    <Link
      to="/student-zone"
      className="mt-auto"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-full
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          py-3
          font-bold
          text-white
          shadow-lg
        "
      >
        📚 Enter Student Zone →
      </motion.button>
    </Link>

  </div>
</motion.div>
        </div>

      </Container>

    </section>

  );

}

export default Projects;