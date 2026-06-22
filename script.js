/* ---------- Hero carousel ---------- */
const slides = document.querySelector('.carousel-slides');
if (slides) {
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000);
}

/* ---------- Donation page: amount selection (guarded so it no-ops elsewhere) ---------- */
const amountButtons = document.querySelectorAll('.amount-button');
const amountDisplay = document.getElementById('amountDisplay');
const customAmountInput = document.getElementById('customAmount');

if (amountButtons.length && amountDisplay && customAmountInput) {
  amountButtons.forEach(button => {
    button.addEventListener('click', () => {
      amountButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      amountDisplay.textContent = `$${button.getAttribute('data-amount')}.00`;
      customAmountInput.value = '';
    });
  });

  customAmountInput.addEventListener('input', () => {
    amountButtons.forEach(btn => btn.classList.remove('selected'));
    amountDisplay.textContent = `$${customAmountInput.value || '0'}.00`;
  });
}

function removeCustomAmount() {
  if (!customAmountInput) return;
  customAmountInput.value = '';
  amountDisplay.textContent = '$0.00';
  amountButtons.forEach(btn => btn.classList.remove('selected'));
}

/* ---------- Mobile sidebar toggle ---------- */
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.display = 'none';
}

/* ---------- Scroll-reveal animation ---------- */
const revealTargets = document.querySelectorAll('.card, .project-card, .client-item, .why_donate, .what-we-do');
if (revealTargets.length && 'IntersectionObserver' in window) {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => observer.observe(el));
}
