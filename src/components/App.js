import goblin from "../img/goblin.png";

const holes = [...document.querySelectorAll(".hole")];
let previousHole = 1;

const img = new Image();
img.src = goblin;
img.classList.add("goblin");

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
