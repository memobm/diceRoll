const btnEl = document.querySelector('.roll');
const pEl = document.querySelector('.roll-number');
const imgEl = document.querySelector('.dice-image');
const mySound = document.createElement('audio');

function randomNum() {
    return numberRoll = Math.floor(Math.random() * 6) + 1;
}

function soundAnimation(src) { // Adds a sound effect
    mySound.src = src;
    mySound.play();
}

function rotateDice() { // To rotate in every sigle click by adding and removing the class after .4s seconds
    let diceRollNum = randomNum();

    imgEl.classList.add('rotate');
    setTimeout(() => imgEl.classList.remove('rotate'), 400)
}

function rollDice() {
    let diceRollNum = randomNum();
    let diceSound = new soundAnimation('rolldice.mp3'); // Calls the sound effect function

    imgEl.src = `img/dice${diceRollNum}.png`;

    switch (diceRollNum) {
        case 1:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
        case 2:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
        case 3:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
        case 4:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
        case 5:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
        case 6:
            pEl.innerHTML = `You roll a ${diceRollNum}`;
            rotateDice();
            break;
    }
}

function main() {
    btnEl.addEventListener('click', rollDice);
}

main();