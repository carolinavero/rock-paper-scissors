//module.exports = {};

const btnPaper = document.querySelector('.button-paper');
const btnRock = document.querySelector('.button-rock');
const btnScissors = document.querySelector('.button-scissors');

const gameBoard = document.querySelector('.game__board');

const gameResult = document.querySelector('.game__result');
const gameResultTitle = document.querySelector('.result');
const btnRestart = document.querySelector('.restart');

var userChoiceArea = document.querySelector('.user-choice');
var compChoiceArea = document.querySelector('.comp-choice');

const showResult = document.querySelector('.show-result');
const previewEl = document.querySelector('.preview');


console.log('winner block', winnerBlock);

var scoreValue = document.querySelector('.score h2');
scoreValue.textContent = 0; 
var score = 0;

const modal = document.getElementById('modal');
const btnModal = document.getElementById('openModal');
const btnClose = document.getElementById('closeModal');
const rules = document.querySelector('.rules');
var userChoice, compChoice;

const btnValues = ['paper', 'rock', 'scissors'];


var winnerBlock = document.createElement('div');
winnerBlock.classList.add('winner');
winnerBlock.innerHTML = `
   
    <div class="winner-wrapper">
        <div class="winner-wave winner-wave1"></div>
        <div class="winner-wave winner-wave2"></div>
        <div class="winner-wave winner-wave3"></div>
        <div class="winner-wave winner-wave4"></div>
    <div>
    
`;

function getRandomValue(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}

function restartGame() {
    console.log("restart game");
    gameBoard.style.display = 'block';

    compChoiceArea.innerHTML = '';
    previewEl.style.display = 'block';
    compChoiceArea.appendChild(previewEl);

    gameResult.style.display = 'none';
    showResult.style.display = 'none';

    //score = 0;
    random = getRandomValue(0, 2);
    console.log("restart... comp choice: ", btnValues[random])
}

var random = getRandomValue(0, 2);
console.log("comp choice", btnValues[random]);

function checkWinner(userChoice, compChoice) {
    console.log(userChoice, compChoice, score);

    setTimeout(function () {

        showResult.style.display = 'flex';
        winnerBlock.style.display = 'flex';


        if (userChoice === compChoice) {
            console.log("Tie");
            gameResultTitle.textContent = 'Tie Game';
        } 
        else if (userChoice === 'paper' && compChoice === 'rock') {
            console.log('the winner is user');
            gameResultTitle.textContent  = 'You Win';

            userChoiceArea.appendChild(winnerBlock);
            score += 1;
            scoreValue.textContent = score;
        } 
        else if (userChoice === 'paper' && compChoice === 'scissors') {
            console.log('the winner is comp');
            gameResultTitle.textContent = 'You Lose';

            compChoiceArea.appendChild(winnerBlock);
            score -= 1;
            scoreValue.textContent = score;
        } 
        else if (userChoice === 'rock' && compChoice === 'scissors') {
            console.log('the winner is user');
            gameResultTitle.textContent  = 'You Win';
            userChoiceArea.appendChild(winnerBlock);
            score += 1;
            scoreValue.textContent = score;
        } 
        else if (userChoice === 'rock' && compChoice === 'paper') {
            console.log('the winner is comp');
            gameResultTitle.textContent = 'You Lose';

            compChoiceArea.appendChild(winnerBlock);
            score -= 1;
            scoreValue.textContent = score;
        } 
        else if (userChoice === 'scissors' && compChoice === 'paper') {
            console.log('the winner is user');
            gameResultTitle.textContent  = 'You Win';
            userChoiceArea.appendChild(winnerBlock);
            score += 1;
            scoreValue.textContent = score;
        }
        else if (userChoice === 'scissors' && compChoice === 'rock') {
            console.log('the winner is comp');
            gameResultTitle.textContent = 'You Lose';
            
            compChoiceArea.appendChild(winnerBlock);
            score -= 1;
            scoreValue.textContent = score;
        }
        else {
            gameResultTitle.textContent = 'Error!';
        }

    }, 1500);
    
}

function waitCompChoice(choice) {

    gameBoard.style.display = 'none';
    gameResult.style.display = 'flex';

    compChoice = btnValues[random];
    //console.log("comp choice", compChoice);

    setTimeout(function () { 

        previewEl.style.display = 'none';

        compChoiceArea.innerHTML = `

        <div class="${compChoice}">
            <div class="button-main">
                <a href="javascript:void(0)" class="button-${compChoice}">
                <img src="images/icon-${compChoice}.svg" alt="${compChoice}">
                </a>
            </div>
        </div>
        `;

    }, 800);

    

    checkWinner(choice, compChoice);
}

function getUserChoice(choice) {

    console.log("user choice..", choice);
   
    userChoiceArea.innerHTML = `
    
    <div class="${choice}">
        <div class="button-main">
            <a href="javascript:void(0)" class="button-${choice}">
            <img src="images/icon-${choice}.svg" alt="${choice}">
            </a>
        </div>
    </div>
    `;

    waitCompChoice(choice);
 
}

btnPaper.addEventListener('click', () => {
    getUserChoice('paper');
});
btnRock.addEventListener('click', () => {
    getUserChoice('rock');
});
btnScissors.addEventListener('click', () => {
    getUserChoice('scissors');
});
btnRestart.addEventListener('click', () => {
    console.log("restart");
    restartGame();
});

btnModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}