import './Skills.css';

const Skills = () => {
  const skills = [
    'Python', 'C++', 'C', 'Java', 'Rust', 'SQL',
    'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
    'Node.js', 'Express', 'MongoDB', 'Mongoose',
    'Linux', 'Git', 'GitHub'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
