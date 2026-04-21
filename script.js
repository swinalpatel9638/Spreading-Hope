// New code for carousel from Chatgpt
const slides = document.querySelector('.carousel-slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds


// For Donation Page

const amountButtons = document.querySelectorAll('.amount-button');
const amountDisplay = document.getElementById('amountDisplay');
const customAmountInput = document.getElementById('customAmount');

  amountButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove 'selected' class from all buttons
          amountButtons.forEach(btn => btn.classList.remove('selected'));

          // Add 'selected' class to the clicked button
          button.classList.add('selected');

          // Update the display amount
          const amount = button.getAttribute('data-amount');
          amountDisplay.textContent = `$${amount}.00`;

          // Clear custom amount input
          customAmountInput.value = '';
      });
  });

  customAmountInput.addEventListener('input', () => {
      // Remove 'selected' class from all buttons
      amountButtons.forEach(btn => btn.classList.remove('selected'));

      // Update the display amount with the custom input
      const customAmount = customAmountInput.value;
      amountDisplay.textContent = `$${customAmount || '0'}.00`;
  });

  function removeCustomAmount() {
      customAmountInput.value = '';
      amountDisplay.textContent = '$0.00';
      amountButtons.forEach(btn => btn.classList.remove('selected'));
  }


  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

