import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Pimpri Chinchwad College of Engineering, Pune',
      degree: 'B.Tech in Information Technology',
      score: 'CGPA: 9.28',
      duration: 'Aug 2022 - Present',
      location: 'Pune, India',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Neural Networks and Fuzzy Logic Control',
        'Machine Learning',
        'Database Management System (DBMS)',
        'Natural Language Processing',
        'OOP Concepts',
        'Data Communication and Computer Networks'
      ]
    },
    {
      institution: 'SM Highschool',
      degree: 'Higher Secondary Certificate Examination',
      score: 'Percentage: 93.17%',
      duration: 'Mar 2020 - Mar 2022',
      location: 'Kankavali, India'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="institution-name">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                </div>
                <div className="education-meta">
                  <span className="score">{edu.score}</span>
                  <span className="duration">{edu.duration}</span>
                  <span className="location">📍 {edu.location}</span>
                </div>
              </div>
              {edu.coursework && (
                <div className="coursework">
                  <h4>Relevant Coursework:</h4>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
