// Local background images
const images = [
  "images/1920x0.jpg",
  "images/1-BAE-M777.jpg",
  "images/image1.jpg",
  "images/military-flags-840.webp"
];

let current = 0;
const heroBg = document.querySelector('.hero-bg');

// Preload images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  if (heroBg) {
    heroBg.style.opacity = 0; // fade out
    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${images[current]}')`;
      heroBg.style.opacity = 1; // fade in
      current = (current + 1) % images.length;
    }, 500);
  }
}

// Initial + rotate
changeBackground();
setInterval(changeBackground, 6000);
