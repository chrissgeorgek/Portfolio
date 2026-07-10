import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaAws,
    FaNodeJs
  } from "react-icons/fa";
  
  import {
    SiDjango,
    SiPostgresql,
    SiMysql,
    SiPostman,
    SiJavascript,
    SiExpress
  } from "react-icons/si";
  
  function Skills() {
  
    const skills = [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <FaAws />, name: "AWS Basics" }
      ];
  
    return (
      <section className="section">
  
        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies I work with</p>
        </div>
  
        <div className="skills-grid">
  
          {skills.map((skill, index) => (
  
            <div className="skill-card" key={index}>
  
              <div className="skill-icon">
                {skill.icon}
              </div>
  
              <h3>{skill.name}</h3>
  
            </div>
  
          ))}
  
        </div>
  
      </section>
    );
  }
  
  export default Skills;