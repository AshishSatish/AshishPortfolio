import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/backWall.jpeg" alt="Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content fade-in-up">
        <div className="hero-badge">👋 Hey there, I'm</div>
        <h1 className="hero-name">Ashish Bhosale</h1>
        <p className="hero-philosophy">Code • Analyze • Invest • Scale</p>
        <p className="hero-tagline">
          Crafting ML infrastructure and backend systems. Decentralization keeps me curious
        </p>
        <p className="hero-description">
          Final-year student at PCCOE Pune with expertise in ML infrastructure, backend systems, and research.
          Published author of 3 IEEE papers focusing on quantum-inspired algorithms and neural architectures.
        </p>
        <div className="hero-social">
          <a href="https://github.com/AshishSatish" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ashish-bhosale-ab9695259/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://leetcode.com/u/ashish_bhosale848/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </a>
          <a href="https://x.com/_ashish_bhosale" target="_blank" rel="noopener noreferrer" className="social-icon" title="X (Twitter)">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Let's Connect</a>
          <a href="#projects" className="btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
