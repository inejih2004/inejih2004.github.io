// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});


  document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    
    // To start counting when section is visible
    const skillsSection = document.getElementById('skills');
    let sectionVisible = false;

    const checkSectionVisibility = () => {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && !sectionVisible) {
        sectionVisible = true;
        counters.forEach(counter => {
          let target = +counter.getAttribute('data-target');
          let current = 0;
          const increment = target / 100;
          
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            counter.innerText = Math.ceil(current);
          }, 20);
        });
      }
    };

    // Trigger visibility check on scroll
    window.addEventListener('scroll', checkSectionVisibility);
    checkSectionVisibility(); // Initial check in case it's already in view
  });

