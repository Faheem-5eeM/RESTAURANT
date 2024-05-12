const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0'; // Show only the current slide
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop to the beginning when at the end
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the end when at the beginning
  showSlide(currentIndex);
}

setInterval(nextSlide, 2500); // Change the interval to control the timing of the fade

const ratingStars = document.querySelectorAll('.rating input[type="radio"]');
const feedbackForm = document.getElementById('feedback-form');

ratingStars.forEach(star => {
  star.addEventListener('change', () => {
    if (star.checked) {
      feedbackForm.style.display = 'block';
    }
  });
});

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000 // Change the number to adjust the interval time in milliseconds
  });
});

