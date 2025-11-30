import './Research.css';

const Research = () => {
  const papers = [
    {
      title: 'Quantum Inspired Search Algorithm for Bias Mitigation',
      conference: 'ICOCT 2025 - IEEE International Conference',
      description: 'Machine Learning (ML) algorithms in real-world applications have created an enormous and significant impact in terms of accuracy, efficiency and reliability. However, maintaining an appropriate bias in these algorithms seems to be a rigorous challenge to ensure fair and precise results obtained from decision making models. This research proposes quantum-inspired approaches to mitigate bias in ML algorithms, addressing computational limitations in traditional fairness techniques.',
      link: 'https://ieeexplore.ieee.org/document/11118699',
      year: '2025'
    },
    {
      title: 'Optimizing Ethical Investment Decisions with Hybrid Heuristic',
      conference: 'ICCSAI 2025 - IEEE International Conference',
      description: 'Utilizing Artificial Intelligence (AI) in ethical investing has seen rapid growth facilitating transparent corporate evaluations. Current assessments are done manually which have certain limitations and may tend to inaccuracy. This paper conducts an analysis of blind search and A* algorithm to evaluate their effectiveness in assessing reports for ethical investment opportunities.',
      link: 'https://ieeexplore.ieee.org/document/11063948',
      year: '2025'
    },
    {
      title: 'Predicting Potentially Hazardous Asteroids (PHAs)',
      conference: 'CONIT 2025 - IEEE International Conference',
      description: 'The objective of this research is to classify asteroids by their risk level, which requires a dataset that contains all the necessary orbital and physical parameters collected from available astronomical data. This research seeks to reduce incorrect classification of PHAs by improving general accuracy using a multitude of features, such as orbital dynamics, physical features, and uncertainty estimation.',
      link: 'https://ieeexplore.ieee.org/document/11167715',
      year: '2025'
    }
  ];

  return (
    <section id="research" className="research">
      <div className="research-content">
        <h2 className="section-title">Research Publications</h2>
        <p className="research-subtitle">IEEE-Indexed Conference Publications</p>
        <div className="research-grid">
          {papers.map((paper, index) => (
            <div key={index} className="research-card">
              <div className="paper-year">{paper.year}</div>
              <h3 className="paper-title">{paper.title}</h3>
              <p className="paper-conference">{paper.conference}</p>
              <p className="paper-description">{paper.description}</p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
