const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let correctKeys = 0;
let letter = alphabet[Math.floor(Math.random() * alphabet.length)];

const keyElement = document.getElementById('key');
const startElement = document.getElementById('start');
const scoreElement = document.getElementById('score');

startElement.addEventListener('click', () => {
    startElement.setAttribute('click-event', 'true');

    scoreElement.innerText = '';

    keyElement.innerHTML = letter;
    window.addEventListener("keydown", keydownEvent);
});

setTimeout(endGame, 30000);

function keydownEvent(e) {
    if (e.key === letter) {
        correctKeys++;
        letter = generateRandomLetter();
        keyElement.innerHTML = letter;
    }
}

function endGame() {
    window.removeEventListener("keydown", keydownEvent);

    const scoreMsg = `Congratulations! You pressed ${correctKeys} letters in 30 seconds`;
    scoreElement.innerText = scoreMsg;
}

function generateRandomLetter() {
    let newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (newLetter === letter) {
        return generateRandomLetter();
    }
    return newLetter;
}