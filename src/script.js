// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
  
  // Remove loading state after a short delay
  setTimeout(() => {
    document.body.classList.remove('loading');
    // Fade in elements sequentially
    animateElementsIn();
  }, 500);
  
  // Navigation menu toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Navigation active link on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    // Update active nav link
    updateActiveNavLink();
    
    // Change navbar background when scrolled
    updateNavbarStyle();
    
    // Run animate on scroll function
    animateOnScroll();
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Normally you'd send this data to a server, but for this example we'll just show a success message
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Initialize tab system
  initTabs();
  
  // Initialize skill progress animation
  initSkillProgress();

  // Initialize cursor follower
  initCursorFollower();
  
  // Run animate on scroll function when the page loads
  window.addEventListener('load', animateOnScroll);
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === current) {
      item.classList.add('active');
    }
  });
}

// Update navbar style on scroll
function updateNavbarStyle() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '15px 0';
    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '20px 0';
    navbar.style.boxShadow = 'none';
  }
}

// Initialize tabs for skills section
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the target tab
        const targetTab = button.dataset.tab;
        
        // Add active class to corresponding pane
        document.getElementById(targetTab).classList.add('active');
      });
    });
  }
}

// Initialize skill progress bars animation
function initSkillProgress() {
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  
  skillProgressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0';
    
    // Set correct width when the element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.width = targetWidth;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(bar);
  });
}

// Animate elements as they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('fade-in');
    }
  });
}

// Animate elements on page load
function animateElementsIn() {
  const elements = document.querySelectorAll('.hero-content, .hero-image, .rotating-cube');
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in');
    }, 200 * index);
  });
}

// Initialize custom cursor follower
function initCursorFollower() {
  const cursor = document.querySelector('.cursor-follower');
  
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add active class on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .social-link, input, textarea');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
      });
    });
  }
}
