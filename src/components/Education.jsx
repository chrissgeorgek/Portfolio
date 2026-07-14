import { motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";

import Container from "./Container";

import useEducation from "../hooks/useEducation";
import useCertificate from "../hooks/useCertificate";

function Education() {

  const {
    educations,
    loading: educationLoading,
    error: educationError,
  } = useEducation();

  const {
    certificates,
    loading: certificateLoading,
    error: certificateError,
  } = useCertificate();

  if (educationLoading || certificateLoading) {

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

  if (educationError || certificateError) {

    return null;

  }

  const activeEducation = educations.filter(
    (item) => item.is_active
  );

  const activeCertificates = certificates.filter(
    (item) => item.is_active
  );

  return (

    <section className="py-12 bg-slate-950">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">

            EDUCATION

          </p>

          <h2 className="text-4xl md:text-5xl font-black">

            Academic

            <span className="text-blue-500">

              {" "}Background

            </span>

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-slate-900 border border-white/10 p-8"
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

              {activeEducation.map((item) => (

                <div
                  key={item.id}
                  className="border-l-2 border-blue-500 pl-6"
                >

                  <h4 className="text-xl font-bold">

                    {item.degree}

                  </h4>

                  <p className="text-blue-400 mt-2">

                    {item.institution}

                  </p>

                  <p className="text-slate-400 mt-2">

                    {new Date(item.start_date).getFullYear()}

                    {" - "}

                    {new Date(item.end_date).getFullYear()}

                  </p>

                  {item.grade && (

                    <p className="text-slate-300 mt-1">

                      {item.grade}

                    </p>

                  )}

                  {item.description && (

                    <p className="text-slate-400 mt-3 leading-7">

                      {item.description}

                    </p>

                  )}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Certificates */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-slate-900 border border-white/10 p-8"
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

              {activeCertificates.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl bg-slate-800 px-6 py-5 hover:bg-slate-700 transition"
                >

                  <h4 className="font-bold text-lg">

                    {item.title}

                  </h4>

                  <p className="text-blue-400 mt-1">

                    {item.issuer}

                  </p>

                  <p className="text-slate-400 text-sm mt-2">

                    {new Date(item.issue_date).toLocaleDateString(
                      "en-IN",
                      {
                        month: "short",
                        year: "numeric",
                      }
                    )}

                  </p>

                  {item.credential_id && (

                    <p className="text-slate-500 text-sm mt-2">

                      Credential ID: {item.credential_id}

                    </p>

                  )}

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