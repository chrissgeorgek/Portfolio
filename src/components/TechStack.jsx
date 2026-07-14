import { motion } from "framer-motion";
import Container from "./Container";
import useSkills from "../hooks/useSkills";
import { iconMap } from "../utils/IconMap";

const gradientMap = {
  Frontend: "from-cyan-500 to-blue-500",
  Backend: "from-blue-500 to-indigo-600",
  Database: "from-indigo-500 to-purple-600",
  Tools: "from-sky-500 to-cyan-600",
  Cloud: "from-orange-500 to-yellow-500",
};

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Cloud",
];

function TechStack() {
  const { skills, loading, error } = useSkills();

  if (loading) {
    return (
      <section className="py-24">
        <Container>
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 text-center text-red-500">
        Failed to load skills.
      </section>
    );
  }

  const groupedSkills = categories
    .map((category) => ({
      title: category,
      skills: skills.filter((skill) => skill.category === category),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <section
      id="techstack"
      className="py-24 bg-slate-950"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            TECH STACK
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Technologies I
            <span className="text-blue-500">
              {" "}Work With
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies, frameworks and tools I use to build modern,
            scalable and production-ready applications.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {groupedSkills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-slate-900 overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >

              <div
                className={`bg-gradient-to-r ${gradientMap[category.title]} p-6`}
              >
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-5 p-7">

                {category.skills.map((skill) => {

                  const Icon = iconMap[skill.icon];

                  return (

                    <motion.div
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4 hover:bg-slate-700 transition duration-300"
                    >

                      <div className="text-3xl text-blue-400">

                        {Icon ? (
                          <Icon />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-slate-600" />
                        )}

                      </div>

                      <div>

                        <p className="font-semibold">
                          {skill.name}
                        </p>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TechStack;