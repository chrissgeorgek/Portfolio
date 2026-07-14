import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import Container from "./Container";
import useExperience from "../hooks/useExperience";
import { iconMap } from "../utils/iconMap";

function Experience() {

  const {

    experiences,

    loading,

    error,

  } = useExperience();

  if (loading) {

    return (

      <section className="bg-slate-950 py-12">

        <Container>

          <div className="flex justify-center">

            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          </div>

        </Container>

      </section>

    );

  }

  if (error) {

    return null;

  }

  const activeExperiences = experiences.filter(

    experience => experience.is_active

  );

  if (activeExperiences.length === 0) {

    return null;

  }

  return (

    <section className="bg-slate-950 py-12">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">

            EXPERIENCE

          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            My Professional

            <span className="text-blue-500">

              {" "}Journey

            </span>

          </h2>

        </motion.div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-500/30"></div>

          {

            activeExperiences.map((experience, index) => (

              <motion.div

                key={experience.id}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: .7,
                }}

                viewport={{
                  once: true,
                }}

                className="relative flex gap-8 mb-20"

              >

                <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">

                  {

                    experience.company_logo ?

                      (

                        <img

                          src={experience.company_logo}

                          alt={experience.company}

                          className="w-full h-full rounded-full object-cover"

                        />

                      )

                      :

                      (

                        <FaBriefcase />

                      )

                  }

                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-slate-900 p-8 hover:border-blue-500 transition">

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-6">

                    <div>

                      <h3 className="text-2xl font-bold">

                        {experience.designation}

                      </h3>

                      <p className="text-blue-400 mt-1">

                        {experience.company}

                      </p>

                    </div>

                    <span className="text-slate-400">

                      {

                        new Date(

                          experience.start_date

                        ).toLocaleDateString(

                          "en-IN",

                          {

                            month: "short",

                            year: "numeric",

                          }

                        )

                      }

                      {" - "}

                      {

                        experience.currently_working ?

                          "Present"

                          :

                          experience.end_date ?

                            new Date(

                              experience.end_date

                            ).toLocaleDateString(

                              "en-IN",

                              {

                                month: "short",

                                year: "numeric",

                              }

                            )

                            :

                            ""

                      }

                    </span>

                  </div>

                  <p className="text-slate-400 leading-8 mb-6">

                    {experience.description}

                  </p>

                  <div className="flex flex-wrap gap-3">

                    {

                      experience.technologies.map((tech) => {

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

                </div>

              </motion.div>

            ))

          }

        </div>

      </Container>

    </section>

  );

}

export default Experience;