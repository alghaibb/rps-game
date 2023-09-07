// COMPLETE LOGIC OF GAME INSIDE THIS FUNCTION
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // Function to decide the winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie!';
        } else if (player === 'rock') {
            if (computer === 'paper') {
                result.textContent = 'Computer Won!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player === 'paper') {
            if (computer === 'scissors') {
                result.textContent = 'Computer Won!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // FUNCTION TO RUN WHEN GAME IS OVER
    const gameOver = () => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const restartBtn = document.querySelector('.restart');
        const playerOptions = document.querySelectorAll('.rock, .paper, .scissors');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game Over!!!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game, well done!';
            result.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'YOU LOSE!';
            result.style.color = 'red';
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Issa TIE!';
            result.style.color = 'grey';
        }
        restartBtn.innerText = 'Restart';
        restartBtn.style.display = 'flex';
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // Function to play the game
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        // FUNCTION TO START PLAYING GAME
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.moveleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // FUNCTION TO CHECK WHO WINS
                winner(this.innerText, computerChoice);

                // CALLING gameOver FUNCTION AFTER 10 MOVES
                if (moves === 10) {
                    gameOver();
                }
            });
        });
    }

    // CALLING playGame FUNCTION INSIDE GAME
    playGame();
}

// CALLING THE GAME FUNCTION
game();
