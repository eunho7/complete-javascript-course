'use strict';

/*
console.log(document.querySelector('.message').
textContent);

document.querySelector('.message').textContent = `🎉 Correct Number!`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number( document.querySelector('.guess').value );

    console.log(guess, typeof guess)

    if (!guess) {
        // document.querySelector('.message').textContent =`🚫 No number!`;
        displayMessage(`🚫 No number!`);

    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = `🎉 Correct Number!`;
        displayMessage(`🎉 Correct Number!`);
        document.querySelector('.number').textContent = secretNumber;

        // select CSS
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highScore').textContent = highscore;
        }
    }
    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage( guess > secretNumber ? `Too high` : `Too low` );
            document.querySelector('.score').textContent = --score;
        } else {
            // document.querySelector('.message').textContent =`You lost the game!`;
            displayMessage(`You lost the game!`);
            document.querySelector('.score').textContent = 0;
        }
        
    }

    // // when guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `Too high`;
    //         document.querySelector('.score').textContent = --score;
    //     } else {
    //         document.querySelector('.message').textContent = `You lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // // when guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `Too low`;
    //         document.querySelector('.score').textContent = --score;
    //     } else {
    //         document.querySelector('.message').textContent = `You lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener
('click', function() {
    // 2.
    score = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // 3.
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // 4.
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});