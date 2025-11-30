import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Genius Behind Instagram\'s "Infinite Scroll" Without Internet: A System Design Deep Dive',
      date: 'Published on Medium',
      excerpt: 'An in-depth exploration of the system design principles and architectural patterns that enable Instagram\'s seamless infinite scroll experience, even without an internet connection.',
      tags: ['System Design', 'Mobile Architecture', 'Caching'],
      link: 'https://medium.com/@ashishbhosale848/the-genius-behind-instagrams-infinite-scroll-without-internet-a-system-design-deep-dive-bbc4abc3a3e8'
    },
    {
      title: 'Cloud Computing vs. Cloud Native vs. Cloud Enabled',
      date: 'Published on Medium',
      excerpt: 'Breaking down the key differences between cloud computing paradigms and understanding when to use cloud-native architectures versus cloud-enabled applications.',
      tags: ['Cloud Computing', 'Architecture', 'DevOps'],
      link: 'https://medium.com/@ashishbhosale848/cloud-computing-vs-cloud-native-vs-cloud-enabled-92f0920221f5'
    },
    {
      title: 'Coming Soon: More Technical Insights',
      date: 'TBD',
      excerpt: 'Stay tuned for more articles on AI, systems programming, machine learning, and software architecture...',
      tags: ['AI', 'System Programming', 'ML']
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="blog-content">
        <h2 className="section-title">Blog & Insights</h2>
        <p className="blog-subtitle">Technical articles and thoughts on AI, Systems, and Finance</p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-header">
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag">{tag}</span>
                ))}
              </div>
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                  Read Article →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
