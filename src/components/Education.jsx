import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Education & Certifications</h2>
        <p>My academic journey</p>
      </div>

      <div className="education-container">

        {/* MCA */}

        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>Master of Computer Applications (MCA)</h3>

          <h4>2022 – 2024</h4>

          <p>
            Completed Master's in Computer Applications with a focus on
            Software Development, Web Technologies, Database Management,
            Programming, and Cloud Computing.
          </p>
        </div>

        {/* BCA */}

        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>Bachelor of Computer Applications (BCA)</h3>

          <h4>2019 – 2022</h4>

          <p>
            Built a strong foundation in Programming, Data Structures,
            Computer Networks, Operating Systems, Database Management,
            Web Technologies, and Object-Oriented Programming.
          </p>
        </div>

        {/* Certifications */}

        <div className="education-card">
          <div className="education-icon">
            <FaCertificate />
          </div>

          <h3>Certifications</h3>

          <ul>
            <li>NPTEL – Cloud Computing</li>
            <li>Google Fundamentals of Digital Marketing</li>
            <li>Reuters – Introduction to Digital Journalism</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Education;