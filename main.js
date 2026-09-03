/**
 * 1tap.am — Smart NFC Tapping Cards
 * Coming Soon Experience (Minimalist)
 */

// =============================================================================
// SOCIAL LINKS: Paste your URLs here whenever you're ready!
// (Or edit the href="..." attributes directly in index.html)
// =============================================================================
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/1tap.am',
  linkedin: 'https://linkedin.com/company/1tap-am',
  whatsapp: 'https://wa.me/37400000000',
};

document.addEventListener('DOMContentLoaded', () => {
  initSocialLinks();
  initCard3DTilt();
  initCardTapEffect();
  initContactForm();
  initYear();
});

/**
 * Applies social links to the buttons
 */
function initSocialLinks() {
  const instaBtn = document.getElementById('link-instagram');
  const linkedinBtn = document.getElementById('link-linkedin');
  const whatsappBtn = document.getElementById('link-whatsapp');

  if (instaBtn && SOCIAL_LINKS.instagram) instaBtn.href = SOCIAL_LINKS.instagram;
  if (linkedinBtn && SOCIAL_LINKS.linkedin) linkedinBtn.href = SOCIAL_LINKS.linkedin;
  if (whatsappBtn && SOCIAL_LINKS.whatsapp) whatsappBtn.href = SOCIAL_LINKS.whatsapp;
}

/**
 * 3D Card Tilt with specular light tracking
 */
function initCard3DTilt() {
  const stage = document.getElementById('nfc-card-stage');
  const card = document.getElementById('card-element');

  if (!stage || !card) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    const xPercent = Math.round((x / rect.width) * 100);
    const yPercent = Math.round((y / rect.height) * 100);
    card.style.setProperty('--mouse-x', `${xPercent}%`);
    card.style.setProperty('--mouse-y', `${yPercent}%`);
  });

  stage.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  });
}

/**
 * Interactive Tap Wave Simulation
 */
function initCardTapEffect() {
  const card = document.getElementById('card-element');
  const ripple = document.getElementById('tap-ripple');
  const toast = document.getElementById('tap-toast');

  if (!card) return;

  let toastTimeout = null;

  card.addEventListener('click', (e) => {
    if ('vibrate' in navigator) {
      navigator.vibrate([20, 40, 20]);
    }

    if (ripple) {
      const rect = card.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripple.style.left = `${clickX}px`;
      ripple.style.top = `${clickY}px`;
      ripple.classList.remove('active');
      void ripple.offsetWidth;
      ripple.classList.add('active');
    }

    if (toast) {
      toast.classList.add('visible');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('visible');
      }, 2200);
    }
  });
}

/**
 * Contact Email Form Submission
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('contact-email');
  const feedback = document.getElementById('contact-feedback');
  const btn = document.getElementById('contact-btn');

  if (!form || !emailInput || !feedback || !btn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    // Show loading state
    btn.disabled = true;
    btn.innerHTML = '<span>Sending...</span>';
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        feedback.className = 'form-feedback success';
        feedback.textContent = `Thank you! We'll reach out to ${email} shortly.`;
        emailInput.value = '';
        btn.innerHTML = '<span>Sent ✓</span>';
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = '<span>Contact Us</span>';
          feedback.textContent = '';
          feedback.className = 'form-feedback';
        }, 4000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Something went wrong. Please try again.';
      btn.disabled = false;
      btn.innerHTML = '<span>Contact Us</span>';
    }
  });
}

/**
 * Sets current year in footer
 */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
