// dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(11, 15, 25, 0.9)';
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(11, 15, 25, 0.7)';
    navbar.style.boxShadow = 'none';
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal-up');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// Form submission handler
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      formFeedback.textContent = 'Thank you! Your message has been sent.';
      formFeedback.style.color = '#14b8a6';
      formFeedback.style.marginTop = '1rem';
      contactForm.reset();
      
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 5000);
    }, 1500);
  });
}

// NFC Card interaction (Ripple)
const card = document.getElementById('card-element');
const ripple = document.getElementById('tap-ripple');
const toast = document.getElementById('tap-toast');

if (card) {
  card.addEventListener('click', (e) => {
    // Create ripple effect
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('active');
    
    // Show toast
    toast.classList.add('show');
    
    setTimeout(() => {
      ripple.classList.remove('active');
      toast.classList.remove('show');
    }, 2000);
  });
}
