import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Ethical Analysis Project',
      description: 'Developed a system to extract and analyze ethical insights from company annual reports by leveraging search algorithms and NLP models. Implements Blind Search and A* Search for keyword detection, optimizing document sections for relevance with fuzzy matching capabilities.',
      technologies: ['Python', 'NLP', 'A* Search', 'Fuzzy Matching', 'PDF Processing'],
      features: [
        'Automatic text extraction from PDF documents',
        'Blind Search and A* Search algorithms for keyword detection',
        'Fuzzy matching for enhanced search accuracy',
        'Optimized document section analysis'
      ]
    },
    {
      title: 'Multi-Threaded Dataset Processor',
      description: 'Built a high-performance multi-threaded C++ application to process large datasets efficiently using concurrency and parallel computing. Implements thread-safe operations with mutex locks to prevent race conditions.',
      technologies: ['C++', 'Multi-threading', 'std::thread', 'std::mutex', 'CSV Parsing'],
      features: [
        'Concurrent processing with std::thread',
        'Thread-safe operations using std::mutex',
        'Efficient CSV file parsing',
        'Split large datasets into chunks for parallel processing'
      ]
    },
    {
      title: 'Quantum Inspired Bias Mitigation',
      description: 'Developed a novel approach to tackle income classification on imbalanced datasets using quantum-inspired fairness techniques. Applied simulated Grover\'s algorithm to amplify minority class samples, achieving superior fairness metrics.',
      technologies: ['Python', 'NumPy', 'Pandas', 'TensorFlow', 'Quantum Computing'],
      features: [
        'Four ANN-based bias mitigation methods',
        'Simulated Grover\'s algorithm for minority class amplification',
        'Achieved best fairness score (SPD: 0.4993)',
        'Maintained competitive accuracy (83.05%)'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
