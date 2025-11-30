import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            When I'm not coding, I'm probably at the gym, reading about investing, or figuring out how global
            events ripple through markets. Fitness and financial literacy are side quests that keep me sharp.
            The goal: build tech that matters, stay healthy, keep learning, and grow consistently across the board.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <h3>9.22</h3>
            <p>CGPA</p>
          </div>
          <div className="stat">
            <h3>3</h3>
            <p>Research Papers</p>
          </div>
          <div className="stat">
            <h3>2</h3>
            <p>Blogs</p>
          </div>
          <div className="stat">
            <h3>400+</h3>
            <p>DSA Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
