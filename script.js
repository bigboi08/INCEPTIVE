// List of background images (replace with your own if you want local files later)
const images = [
  "https://images.unsplash.com/photo-1617723332539-6103f7d1b4a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // fighter jets
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // aircraft carrier
  "https://images.unsplash.com/photo-1504718855392-c0f33b1b2a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Marines
  "https://images.unsplash.com/photo-1590281579446-8b04a7761de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"  // American flag
];

let current = 0;
const heroBg = document.querySelector('.hero-bg');

// ✅ Preload images so they don’t flicker
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// ✅ Function to change background
function changeBackground() {
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }
}

// ✅ Initial load + rotation every 6s
changeBackground();
setInterval(changeBackground, 6000);

