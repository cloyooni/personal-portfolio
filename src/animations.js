export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.section-header, .about-col, .card, .project-card, .contact-card').forEach(el => {
    observer.observe(el);
    el.classList.add('animate-on-scroll');
  });
  
  // Update skill badge animations
  document.querySelectorAll('.skill-badge').forEach((badge, index) => {
    badge.style.setProperty('--i', index + 1);
  });
  
  // Update project card animations
  document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.setProperty('--i', index + 1);
  });
}; 