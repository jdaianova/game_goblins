import goblin from "../img/goblin.png";

const target = document.querySelector(".target");
const score = document.querySelector(".score span");
const fail = document.querySelector(".fail span");
const holes = [...document.querySelectorAll(".hole")];
const startNewGame = document.querySelector(".start-new-game");
const popup = document.querySelector(".popup");
const result = document.querySelector(".result span");

let scorePoints = 0;
let failPoints = 0;

window.addEventListener("mousemove", (e) => {
  target.style.top = e.pageY + "px";
  target.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (!e.target.closest(".goblin")) {
    failPoints++;
    fail.textContent = failPoints;
    if (failPoints === 5) {
      //alert('game over!');
      result.textContent = scorePoints;
      popup.classList.remove("inactive");
    }
  }
  target.classList.add("target-boom");
});

window.addEventListener("mouseup", () => {
  target.classList.remove("target-boom");
});

let previousHole = 1;

const img = new Image();
img.src = goblin;
img.classList.add("goblin");

img.addEventListener("click", () => {
  scorePoints++;
  score.textContent = scorePoints;
  holes.forEach((hole) => {
    hole.innerHTML = "";
  });
});

function run() {
  holes.forEach((hole) => {
    hole.innerHTML = "";
  });
  let currentHole = Math.floor(Math.random() * holes.length);
  if (previousHole === currentHole) {
    currentHole = currentHole + 1;
  }
  holes[currentHole].appendChild(img);
  previousHole = currentHole;
}

setInterval(run, 1000);

startNewGame.addEventListener("click", () => {
  popup.classList.add("inactive");
  location.reload();
});
