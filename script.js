// Function to toggle the mobile menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Function to close the mobile menu
function closeMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('active');
}

// Function to open the preview popup
function openPopup(title, price, description) {
  const popup = document.getElementById('preview-popup');
  const popupTitle = document.getElementById('popup-title');
  const popupPrice = document.getElementById('popup-price');
  const popupDescription = document.getElementById('popup-description');

  popupTitle.textContent = title;
  popupPrice.textContent = price;
  popupDescription.textContent = description;

  popup.classList.add('active');
}

// Function to close the preview popup
function closePopup() {
  const popup = document.getElementById('preview-popup');
  popup.classList.remove('active');
}

// Initialize Swiper for the home page slider
const homeSlider = new Swiper('.home-slider', {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Swiper for the Reviews Section
const reviewSlider = new Swiper('.review-swiper', {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});