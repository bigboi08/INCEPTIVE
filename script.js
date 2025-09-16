const images = [
  "https://images.unsplash.com/photo-1601560896164-834650b0b2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // fighter jet
  "https://images.unsplash.com/photo-1582745071180-fbaf240d4f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // carrier
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Marines
  "https://images.unsplash.com/photo-1504718855392-c0f33b1b2a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"  // flag
];

let current = 0;
const heroBg = document.querySelector('.hero-bg');

// preload images
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

// initial + rotate
changeBackground();
setInterval(changeBackground, 6000);

