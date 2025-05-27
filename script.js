const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && !dino.classList.contains("jump")) {
    jump();
  }
});

function jump() {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 500);
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
    location.reload();
  }
}, 10);
