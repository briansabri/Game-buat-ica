const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const game = document.getElementById("game");

// Lompat saat layar diklik atau disentuh
game.addEventListener("click", () => {
  if (!dino.classList.contains("jump")) {
    jump();
  }
});

function jump() {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 500);
}

// Deteksi tabrakan
let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  // Jarak kaktus mendekat + posisi dino masih di bawah
  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
    location.reload();
  }
}, 10);
