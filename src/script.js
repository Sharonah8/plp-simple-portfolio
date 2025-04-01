
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Change navbar background when scrolled
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '20px 0';
      navbar.style.boxShadow = 'none';
    }
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
  
  // Add fade-in animation to elements as they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .stat');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Run animate on scroll function when the page loads and on scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});
