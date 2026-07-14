import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Container from "./Container";
import useProjects from "../hooks/useProjects";
import { iconMap } from "../utils/iconMap";

function FeaturedProject() {

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

  const project = projects.find(
    (item) => item.featured && item.is_active
  );

  if (!project) return null;

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

            FEATURED PROJECT

          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            {project.title}

          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-slate-900 overflow-hidden"
        >

          <div className="overflow-hidden">

            <img

              src={project.project_image}

              alt={project.title}

              className="w-full h-full object-cover hover:scale-105 transition duration-700"

            />

          </div>

          <div className="p-8 lg:p-12">

            <h3 className="text-3xl font-bold mb-6">

              {project.short_description}

            </h3>

            <p className="text-slate-400 leading-8 mb-8">

              {project.description}

            </p>

            <div className="flex flex-wrap gap-3 mb-10">

              {project.technologies.map((tech) => {

                const Icon = iconMap[tech.icon];

                return (

                  <span
                    key={tech.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                  >

                    {Icon && <Icon />}

                    {tech.name}

                  </span>

                );

              })}

            </div>

            <div className="flex flex-wrap gap-5">

              {project.github_url && (

                <a

                  href={project.github_url}

                  target="_blank"

                  rel="noreferrer"

                  className="flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-500 transition px-7 py-3 font-semibold"

                >

                  <FaGithub />

                  GitHub

                </a>

              )}

              {project.live_demo_url && (

                <a

                  href={project.live_demo_url}

                  target="_blank"

                  rel="noreferrer"

                  className="flex items-center gap-3 rounded-full border border-slate-700 hover:border-blue-500 px-7 py-3 transition"

                >

                  <FaExternalLinkAlt />

                  Live Demo

                </a>

              )}

            </div>

          </div>

        </motion.div>

      </Container>

    </section>

  );

}

export default FeaturedProject;