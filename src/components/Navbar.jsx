import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "techstack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-50">

      <div className="max-w-[1280px] mx-auto px-5">

        <div
          className={`transition-all duration-300 rounded-2xl border flex items-center justify-between px-6 py-4 ${
            scrolled
              ? "bg-slate-900/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-slate-900/40 backdrop-blur-xl border-white/5"
          }`}
        >
          <h2 className="text-2xl font-black tracking-tight cursor-pointer">

            ChrissG
            <span className="text-blue-500">.</span>

          </h2>

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                spy
                className="cursor-pointer text-slate-300 hover:text-white transition"
                activeClass="text-blue-400"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden lg:inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold hover:scale-105 transition"
          >
            Resume
          </a>

          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-6 lg:hidden">

            <div className="flex flex-col gap-5">

              {links.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-slate-300 hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-4 rounded-full bg-blue-600 py-3 text-center font-semibold"
              >
                Download Resume
              </a>

            </div>

          </div>
        )}

      </div>

    </header>
  );
}