const screens = document.querySelectorAll(".screen");
const buttons = document.querySelectorAll(".next-btn");
const music = document.getElementById("bgMusic");
const cake = document.querySelector(".cake");
const cakeText = document.getElementById("cakeText");
const effects = document.getElementById("effects");

let current = 0;

/* NAVIGATION */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");

    // 🎵 Start music on "My Heart 💌"
    if (current === 1) {
      music.play().catch(() => {});
    }
    // 🔥 Start fireworks on LAST page
if (current === screens.length - 1) {
  startFireworks();
}

  });
});


/* CAKE */
if (cake) {
  cake.addEventListener("click", () => {
    cake.textContent = "🍰";
    cakeText.textContent = "With Love ❤️";
  });
}

/* SLIDESHOW */
const photos = [
  "photos/photo1.jpg",
  "photos/photo2.jpg",
  "photos/photo3.jpg",
  "photos/photo4.jpg",
  "photos/photo5.jpg"
];

let photoIndex = 0;
setInterval(() => {
  const img = document.getElementById("slideshow");
  if (img) {
    photoIndex = (photoIndex + 1) % photos.length;
    img.src = photos[photoIndex];
  }
}, 2500);

/* ❤️🌹 FULLSCREEN HEARTS & FLOWERS SPAWNER */
const symbols = ["❤️", "💖",];

setInterval(() => {
  const el = document.createElement("div");
  el.className = "effect";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  // FULL WIDTH SPAWN
  el.style.left = Math.random() * window.innerWidth + "px";

  // RANDOM SIZE
  el.style.fontSize = 22 + Math.random() * 18 + "px";

  // RANDOM SPEED
  el.style.animationDuration = 5 + Math.random() * 4 + "s";

  effects.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 10000);

}, 180); // more frequent = more hearts











/* ✨ TAP ANYWHERE → HEART BURST */
document.addEventListener("click", (e) => {
  createBurst(e.clientX, e.clientY);
});

function createBurst(x, y) {
  const burstCount = 10;
  for (let i = 0; i < burstCount; i++) {
    const heart = document.createElement("div");
    heart.className = "firework";
    heart.textContent = "❤️";

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--x", Math.random());
    heart.style.setProperty("--y", Math.random());

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}





function startFireworks() {
  setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createBurst(x, y);
  }, 800);
}
