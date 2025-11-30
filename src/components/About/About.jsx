import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            I'm a final-year IT student passionate about the intersection of technology, investing, and health.
            I love understanding how markets work, how global events shape financial decisions, and how smart
            systems can simplify complex problems.
          </p>
          <p>
            Outside coding, I focus on long-term investing, learning about finance, and maintaining a healthy
            lifestyle through fitness and mindful habits. My goal is to build meaningful tech solutions while
            growing consistently in both financial and personal well-being.
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
