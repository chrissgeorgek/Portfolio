import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import TechStack from "../../components/TechStack";
import FeaturedProject from "../../components/FeaturedProject";
import Projects from "../../components/Projects";
import Education from "../../components/Education";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function PublicLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="fixed inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />

      <div className="fixed -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[220px] -z-20" />

      <div className="fixed bottom-[-250px] right-[-250px] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[220px] -z-20" />

      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="techstack">
          <TechStack />
        </section>

        <section id="featured">
          <FeaturedProject />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

      <Outlet />

    </div>
  );
}