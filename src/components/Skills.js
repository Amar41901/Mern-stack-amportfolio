import '../styles/Skills.css'; // Import the CSS file

const Skills = () => (
  <div className="skills-container">
    <h1 className="skills-title">Skills</h1>
    <p className="skills-intro">Here are some of the skills I bring to the table:</p>
    <ul className="skills-list">
      <li className="skill-item">
        <h2 className="skill-name">Front-end Development (0–10)</h2>
        <p>Technologies: React JS, Vue JS, Next JS, Tailwind CSS, SCSS, HTML, CSS, JavaScript</p>
        <div className="skill-bar">
          <div className="progress" style={{ width: "90%" }}>9/10</div>
        </div>
      </li>
      <li className="skill-item">
        <h2 className="skill-name">Back-end Development (0–10)</h2>
        <p>Technologies: Node.js, Express, MongoDB, MySQL, ORACLE SQL Server</p>
        <div className="skill-bar">
          <div className="progress" style={{ width: "85%" }}>8.5/10</div>
        </div>
      </li>
      <li className="skill-item">
        <h2 className="skill-name">Version Control (0–10)</h2>
        <p>Technologies: Git, GitHub</p>
        <div className="skill-bar">
          <div className="progress" style={{ width: "80%" }}>8/10</div>
        </div>
      </li>
      <li className="skill-item">
        <h2 className="skill-name">Others (0–10)</h2>
        <p>Technologies: RESTful APIs, Responsive Design, Agile Methodologies</p>
        <div className="skill-bar">
          <div className="progress" style={{ width: "75%" }}>7.5/10</div>
        </div>
      </li>
    </ul>
    <p className="skills-outro">I am always looking to learn new technologies and improve my existing skills to deliver high-quality web applications.</p>
  </div>
);

export default Skills;
