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

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number( document.querySelector('.guess').value );

    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent =
            `🚫 No number!`;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `🎉 Correct Number!`;

        // select CSS
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too high`;
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = `You lost the game!`;
            document.querySelector('.score').textContent = 0;
        }
        
    // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too low`;
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = `You lost the game!`;
            document.querySelector('.score').textContent = 0;
        }
    }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener
('click', function() {
    // 2.
    score = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // 3.
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // 4.
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});