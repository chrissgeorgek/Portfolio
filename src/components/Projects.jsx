import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

    const projects = [

        {
          title: "SAHA Learning Platform",
      
          description:
            "Developed a full-stack role-based EdTech platform using React, Django REST Framework, PostgreSQL, Redis, JWT Authentication, and WebSockets. Features include secure authentication, real-time chat, community discussions, course management, and an admin dashboard.",
      
          tech: [
            "React",
            "Django",
            "Django REST",
            "PostgreSQL",
            "Redis",
            "JWT",
            "WebSockets"
          ],
      
          github: "https://github.com/YOUR_USERNAME/saha-learning-platform",
          demo: "#"
        },
      
        {
          title: "Training Management System",
      
          description:
            "Designed and developed a role-based Training Management System using Django for managing courses, batches, trainers, student registrations, attendance, daily work reports, approvals, and administrative operations. Implemented secure authentication, CRUD functionality, reporting, and responsive user interfaces.",
      
          tech: [
            "Python",
            "Django",
            "SQLite",
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript"
          ],
      
          github: "https://github.com/chrissgeorgek/Training-Management.git",
          demo: "#"
        },
      
        {
          title: "Parking Slot Detection",
      
          description:
            "Built an intelligent parking slot detection system using Python, OpenCV, and Deep Learning to identify vacant parking spaces from images and video streams, improving parking management efficiency through computer vision.",
      
          tech: [
            "Python",
            "OpenCV",
            "Deep Learning",
            "Computer Vision"
          ],
      
          github: "https://github.com/YOUR_USERNAME/parking-slot-detection",
          demo: "#"
        }
      
      ];

  return (

    <section className="section">

      <div className="section-title">

        <h2>Projects</h2>

        <p>Some of my recent work</p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.tech.map((tech, i) => (

                <span key={i}>{tech}</span>

              ))}

            </div>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;