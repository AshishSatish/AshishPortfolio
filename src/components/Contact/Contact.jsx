import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AshishSatish',
      icon: '⚡'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashish-bhosale-ab9695259/',
      icon: '💼'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ashish_bhosale848/',
      icon: '🧩'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/_ashish_bhosale',
      icon: '🐦'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="contact-info">
          <a href="mailto:ashishbhosale848@gmail.com" className="email-link">
            ashishbhosale848@gmail.com
          </a>
          <p className="location">📍 Pune, Maharashtra, India</p>
        </div>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-name">{link.name}</span>
            </a>
          ))}
        </div>
        <footer className="footer">
          <p>&copy; 2025 Ashish Satish Bhosale. All rights reserved.</p>
          <p className="footer-tagline">Built with React & Passion</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
