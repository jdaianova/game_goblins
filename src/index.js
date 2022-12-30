import './index.html';
import './index.css';
import goblin from './img/goblin.png';

const holes = [...document.querySelectorAll('.hole')];
let previousHole = 1;

function run () {
    holes.forEach((hole) => {
        hole.innerHTML = '';
    });
    let currentHole = Math.floor(Math.random() * holes.length);
    if (previousHole === currentHole) {
         currentHole = currentHole+1;
    };
    holes[currentHole].innerHTML = '<img class="goblin" src="./assets/goblin.png" alt="goblin">';
    previousHole = currentHole;
}

setInterval(run, 1000);

