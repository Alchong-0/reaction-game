const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let correctKeys = 0;
let letter = alphabet[Math.floor(Math.random() * alphabet.length)];

const keyElement = document.getElementById('key');
const startElement = document.getElementById('start');
const scoreElement = document.getElementById('score');
const modal = document.getElementById('modalMsg');
const closeModal = document.getElementsByClassName("close")[0];
const timerElement = document.getElementById('timer');

startElement.addEventListener('click', () => {

    scoreElement.innerText = '';

    keyElement.innerHTML = letter;
    window.addEventListener("keydown", keydownEvent);
    countdown();
});



function keydownEvent(e) {
    if (e.key === letter) {
        correctKeys++;
        letter = generateRandomLetter();
        keyElement.innerHTML = letter;
    }
}

function generateRandomLetter() {
    let newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (newLetter === letter) {
        return generateRandomLetter();
    }
    return newLetter;
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

function countdown() {
    let sec = 29;
    timerElement.style.display = "block";
    let timer = setInterval(() => {
        timerElement.innerHTML = `Time remaining: ${sec}s`;
        sec--;
        
        if (sec < 0) {
            clearInterval(timer);
            window.removeEventListener("keydown", keydownEvent);

            const scoreMsg = `Congratulations! You pressed ${correctKeys} letters in 30 seconds`;
            scoreElement.innerText = scoreMsg;

            modal.style.display = "block";
        }
    }, 1000);
}