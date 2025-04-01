import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const Index = () => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#"><span className="highlight">{'{'}</span>CodeArtisan<span className="highlight">{'}'}</span></a>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">Journey</a>
            <a href="#skills" className="nav-link">Craft</a>
            <a href="#projects" className="nav-link">Creations</a>
            <a href="#contact" className="nav-link">Connect</a>
            <Button 
              onClick={toggleTheme}
              variant="ghost" 
              size="icon" 
              className="ml-2 rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="code-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="greeting-text">
              <span className="console-line">const developer = {'{'}</span>
              <h1 className="title"><span className="console-text">name:</span> "Sharon Nyamongo",</h1>
              <h2 className="subtitle"><span className="console-text">title:</span> "Emerging Developer",</h2>
              <span className="console-line">passion: "Learning and Growing",</span>
              <span className="console-line">{'}'};</span>
            </div>
            <p className="description">
              Passionate about technology, eager to learn, and ready to transform ideas into code.
            </p>
            <div className="cta-buttons">
              <a href="#skills" className="btn btn-primary">Explore My Skills</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="rotating-cube">
              <div className="cube-face front"><i className="fab fa-html5"></i></div>
              <div className="cube-face back"><i className="fab fa-css3-alt"></i></div>
              <div className="cube-face right"><i className="fab fa-js"></i></div>
              <div className="cube-face left"><i className="fab fa-python"></i></div>
              <div className="cube-face top"><i className="fas fa-database"></i></div>
              <div className="cube-face bottom"><i className="fas fa-code"></i></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <span className="timeline-date">2 Years Ago</span>
                <p>
                  My journey began with curiosity about how websites work. I started by learning HTML
                  and CSS, building simple pages that gradually grew more complex.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="timeline-content">
                <h3>The Builder</h3>
                <span className="timeline-date">1.5 Years Ago</span>
                <p>
                  As I mastered JavaScript, I began creating interactive experiences. My passion for
                  clean, efficient code took root as I built my first real-world projects.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-server"></i>
              </div>
              <div className="timeline-content">
                <h3>The Analyst</h3>
                <span className="timeline-date">1 Year Ago</span>
                <p>
                  Discovering Python opened new doors for me in automation and data analysis. I learned
                  how to extract insights from large datasets and build useful tools.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="timeline-content">
                <h3>The Architect</h3>
                <span className="timeline-date">Present</span>
                <p>
                  Now I bring everything together, building full-stack solutions that combine
                  front-end aesthetics with back-end functionality. Every day is a new opportunity to learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Craft</h2>
          <div className="skills-tabs">
            <div className="tab-buttons">
              <button className="tab-btn active" data-tab="frontend">Frontend</button>
              <button className="tab-btn" data-tab="backend">Backend</button>
              <button className="tab-btn" data-tab="tools">Tools</button>
            </div>
            
            <div className="tab-content">
              <div className="tab-pane active" id="frontend">
                <div className="skills-container">
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fab fa-html5"></i>
                    </div>
                    <h3>HTML5</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 90%"></div>
                      </div>
                      <span className="skill-percent">90%</span>
                    </div>
                    <ul className="skill-details">
                      <li>Semantic Markup</li>
                      <li>Accessibility</li>
                      <li>SEO Best Practices</li>
                    </ul>
                  </div>
                  
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fab fa-css3-alt"></i>
                    </div>
                    <h3>CSS3</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 85%"></div>
                      </div>
                      <span className="skill-percent">85%</span>
                    </div>
                    <ul className="skill-details">
                      <li>Flexbox & Grid</li>
                      <li>Animations</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <h3>JavaScript</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 75%"></div>
                      </div>
                      <span className="skill-percent">75%</span>
                    </div>
                    <ul className="skill-details">
                      <li>ES6+ Features</li>
                      <li>DOM Manipulation</li>
                      <li>Async Programming</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="tab-pane" id="backend">
                <div className="skills-container">
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fab fa-python"></i>
                    </div>
                    <h3>Python</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 80%"></div>
                      </div>
                      <span className="skill-percent">80%</span>
                    </div>
                    <ul className="skill-details">
                      <li>Data Analysis</li>
                      <li>Automation</li>
                      <li>Web Scraping</li>
                    </ul>
                  </div>
                  
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <h3>Databases</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 70%"></div>
                      </div>
                      <span className="skill-percent">70%</span>
                    </div>
                    <ul className="skill-details">
                      <li>SQL & NoSQL</li>
                      <li>Data Modeling</li>
                      <li>Query Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="tab-pane" id="tools">
                <div className="skills-container">
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fas fa-code-branch"></i>
                    </div>
                    <h3>Git</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 75%"></div>
                      </div>
                      <span className="skill-percent">75%</span>
                    </div>
                    <ul className="skill-details">
                      <li>Version Control</li>
                      <li>Collaboration</li>
                      <li>CI/CD Basics</li>
                    </ul>
                  </div>
                  
                  <div className="skill-card">
                    <div className="skill-icon">
                      <i className="fas fa-terminal"></i>
                    </div>
                    <h3>Command Line</h3>
                    <div className="skill-level">
                      <div className="skill-progress-bar">
                        <div className="skill-progress" style="width: 65%"></div>
                      </div>
                      <span className="skill-percent">65%</span>
                    </div>
                    <ul className="skill-details">
                      <li>Bash/Shell</li>
                      <li>Automation</li>
                      <li>File Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Creations</h2>
          <div className="projects-showcase">
            <div className="project-card featured empty-state">
              <div className="project-preview">
                <div className="empty-project-placeholder">
                  <i className="fas fa-code"></i>
                  <p>Projects Coming Soon</p>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">Learning in Progress</h3>
                <p className="project-description">
                  As a budding developer, I'm currently building my skills and working on exciting projects. 
                  Check back soon to see my growing portfolio of work!
                </p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Update location */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3>Email Me At</h3>
                <p>nyamongosharon88@gmail.com</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Based In</h3>
                <p>Nairobi, Kenya</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-user-clock"></i>
                </div>
                <h3>Working Hours</h3>
                <p>Mon - Fri: 9am - 6pm EAT</p>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="highlight">{'{'}</span>CodeArtisan<span className="highlight">{'}'}</span>
          </div>
          <p className="footer-quote">"Code is poetry in motion"</p>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">Journey</a>
            <a href="#skills">Craft</a>
            <a href="#projects">Creations</a>
            <a href="#contact">Connect</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Sharon Nyamongo. Crafted with <span className="heart">❤</span> and a lot of coffee</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
