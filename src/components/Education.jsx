import { motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import Container from "./Container";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Kristu Jyoti College of Management and Technology",
    year: "2022 – 2024",
    score: "CGPA: 8.03",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Kristu Jyoti College of Management and Technology",
    year: "2019 – 2022",
    score: "CGPA: 7.00",
  },
];

const certifications = [
  "NPTEL – Cloud Computing & Distributed Systems",
  "Google – Fundamentals of Digital Marketing",
  "Reuters – Introduction to Digital Journalism",
  "AWS Short-Term Training Programme (STTP)",
];

function Education() {
  return (
    <section className="py-12 bg-slate-950">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            Academic
            <span className="text-blue-500"> Background</span>

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="rounded-30 bg-slate-900 border border-white/10 p-8"
          >

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl">

                <FaGraduationCap />

              </div>

              <h3 className="text-3xl font-bold">

                Education

              </h3>

            </div>

            <div className="space-y-8">

              {education.map((item)=>(

                <div
                  key={item.degree}
                  className="border-l-2 border-blue-500 pl-6"
                >

                  <h4 className="text-xl font-bold">

                    {item.degree}

                  </h4>

                  <p className="text-blue-400 mt-2">

                    {item.college}

                  </p>

                  <p className="text-slate-400 mt-2">

                    {item.year}

                  </p>

                  <p className="text-slate-300 mt-1">

                    {item.score}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Certifications */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="rounded-30 bg-slate-900 border border-white/10 p-8"
          >

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl">

                <FaAward />

              </div>

              <h3 className="text-3xl font-bold">

                Certifications

              </h3>

            </div>

            <div className="space-y-5">

              {certifications.map((item)=>(

                <div
                  key={item}
                  className="rounded-2xl bg-slate-800 px-6 py-5 hover:bg-slate-700 transition"
                >

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Education;