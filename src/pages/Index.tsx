
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import '../styles/index.css';

const Index = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle navbar background on scroll
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
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

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize tab functionality
  useEffect(() => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get corresponding tab pane and activate it
        const tabId = button.getAttribute('data-tab');
        const tabPane = document.getElementById(tabId);
        if (tabPane) {
          tabPane.classList.add('active');
        }
      });
    });

    // Initialize skill progress animation
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLElement;
          const targetWidth = progressBar.dataset.progress || '0%';
          setTimeout(() => {
            progressBar.style.width = targetWidth;
          }, 200);
        }
      });
    }, { threshold: 0.1 });
    
    skillProgressBars.forEach(bar => {
      observer.observe(bar);
    });
    
    // Add scroll animation to elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-card, .grid-item');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('fade-in');
        }
      });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on initial load
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#"><span className="highlight">S</span>haron</a>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">Journey</a>
            <a href="#skills" className="nav-link">Craft</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
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
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="greeting-text">
              Hello, World!
            </div>
            <h1 className="title">I'm <span className="highlight">Sharon Nyamongo</span></h1>
            <h2 className="subtitle">Developer & Designer</h2>
            <p className="description">
              Passionate about technology and design, I transform ideas into elegant digital experiences. 
              Join me on my journey as I build solutions that matter.
            </p>
            <div className="cta-buttons">
              <a href="#skills" className="btn btn-primary">
                <span>My Skills</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-grid">
              <div className="grid-item">
                <i className="fab fa-html5"></i>
              </div>
              <div className="grid-item">
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className="grid-item">
                <i className="fab fa-js"></i>
              </div>
              <div className="grid-item">
                <i className="fab fa-python"></i>
              </div>
            </div>
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
                        <div className="skill-progress" data-progress="90%"></div>
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
                        <div className="skill-progress" data-progress="85%"></div>
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
                        <div className="skill-progress" data-progress="75%"></div>
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
                        <div className="skill-progress" data-progress="80%"></div>
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
                        <div className="skill-progress" data-progress="70%"></div>
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
                        <div className="skill-progress" data-progress="75%"></div>
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
                        <div className="skill-progress" data-progress="65%"></div>
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
          <h2 className="section-title">My Work</h2>
          <div className="projects-showcase">
            <div className="project-card empty-state">
              <div className="project-preview">
                <div className="empty-project-placeholder">
                  <i className="fas fa-code"></i>
                  <p>Coming Soon</p>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">Portfolio in Progress</h3>
                <p className="project-description">
                  I'm currently building innovative projects to showcase my skills. Check back soon to see my 
                  growing portfolio of work that demonstrates my passion for development.
                </p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3>Email</h3>
                <p>nyamongosharon88@gmail.com</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Location</h3>
                <p>Nairobi, Kenya</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-user-clock"></i>
                </div>
                <h3>Working Hours</h3>
                <p>Mon - Fri: 9am - 6pm EAT</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3>Call Me</h3>
                <p>Available on request</p>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Have a question or want to collaborate? I'd love to hear from you.</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit">
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="highlight">S</span>haron
          </div>
          <p className="footer-quote">"Turning ideas into elegant solutions"</p>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">Journey</a>
            <a href="#skills">Craft</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Sharon Nyamongo. Made with <span className="heart">❤</span> and code</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
