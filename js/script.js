/* ============================================================
   Spreading Hope — site scripts
   All blocks are guarded, so each page runs only what applies.
   ============================================================ */

/* Mobile sidebar */
function showSidebar() { var s = document.getElementById('sidebar'); if (s) s.classList.add('open'); }
function hideSidebar() { var s = document.getElementById('sidebar'); if (s) s.classList.remove('open'); }

/* Dismissible announcement bar */
function closeTopBar() { var t = document.getElementById('topBar'); if (t) t.style.display = 'none'; }

/* ---- Donation page: amount selection ---- */
var amountDisplay = document.getElementById('amountDisplay');
var customAmount = document.getElementById('customAmount');
function fmtAmount(n) { return '$' + Number(n || 0).toFixed(2); }
function clearSelectedAmounts() {
  document.querySelectorAll('.amount-button').forEach(function (b) { b.classList.remove('selected'); });
}
function removeCustomAmount() {
  if (customAmount) customAmount.value = '';
  clearSelectedAmounts();
  if (amountDisplay) amountDisplay.textContent = '$0.00';
}
(function () {
  var buttons = document.querySelectorAll('.amount-button');
  if (!buttons.length || !amountDisplay) return;
  buttons.forEach(function (btn) {
    function pick() {
      clearSelectedAmounts();
      btn.classList.add('selected');
      if (customAmount) customAmount.value = btn.dataset.amount;
      amountDisplay.textContent = fmtAmount(btn.dataset.amount);
    }
    btn.addEventListener('click', pick);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
    });
  });
  if (customAmount) {
    customAmount.addEventListener('input', function () {
      clearSelectedAmounts();
      amountDisplay.textContent = customAmount.value ? fmtAmount(customAmount.value) : '$0.00';
    });
  }
})();

/* ---- Home page: hero carousel cross-fade ---- */
(function () {
  var items = document.querySelectorAll('.carousel-item');
  if (items.length < 2) return;
  var i = 0;
  setInterval(function () {
    items[i].classList.remove('active');
    i = (i + 1) % items.length;
    items[i].classList.add('active');
  }, 5000);
})();

/* ---- Scroll-reveal on cards, stories and sections ---- */
(function () {
  var targets = document.querySelectorAll('.card, .project-card, .client-item, .why_donate, .what-we-do, .box, .story-content, .section-wrapper');
  if (!targets.length || !('IntersectionObserver' in window)) return;
  targets.forEach(function (el) { el.classList.add('reveal'); });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach(function (el) { observer.observe(el); });
})();
