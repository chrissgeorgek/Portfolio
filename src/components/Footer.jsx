import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Container from "./Container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">

      <Container className="py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black mb-4">

              Chriss
              <span className="text-blue-500">.</span>

            </h2>

            <p className="text-slate-400 leading-8">

              Software developer passionate about building
              scalable, secure and modern web applications
              using Python, Django and React.

            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4">

              {[
                "home",
                "about",
                "experience",
                "techstack",
                "projects",
                "contact",
              ].map((item) => (

                <Link
                  key={item}
                  to={item}
                  smooth
                  duration={500}
                  offset={-70}
                  className="capitalize cursor-pointer text-slate-400 hover:text-blue-400 transition"
                >
                  {item === "techstack" ? "Tech Stack" : item}
                </Link>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Connect

            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/chrissgeorgek"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >

                <FaGithub />

              </a>

              <a
                href="https://in.linkedin.com/in/chrissgeorge"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >

                <FaLinkedin />

              </a>

              <a
                href="mailto:chrissgeorgek@gmail.com"
                className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >

                <FaEnvelope />

              </a>

            </div>

          </div>


        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-500 text-center">

            © {year} Chriss George. All rights reserved.

          </p>

          <Link
            to="home"
            smooth
            duration={500}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 transition flex justify-center items-center cursor-pointer"
          >

            <FaArrowUp />

          </Link>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;