'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent =
        '⛔️ Not a vaild number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
        '🏆 Congrats, you have won!!';
        document.querySelector('.number').textContent = 
        secretNumber;

        document.querySelector('body').style.
        backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '100rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent =
        '🔴, your guess is too high!!!';
        score--;
        document.querySelector('.score').textContent =
        score;
        } else {
            document.querySelector('.score').textContent =
            'YOU LOST THE GAME!!!';
            document.querySelector('message').textContent =
            0;
        }
    } else if (guess < secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent =
        '🔴, your guess is too low!!!';
        score--;
        document.querySelector('.score').textContent =
        score;
        } else {
            document.querySelector('.score').textContent =
            'YOU LOST THE GAME!!!';
            document.querySelector('message').textContent =
            0;
        }
    }
    document.querySelector('.again').addEventListener('click', function() {
        score = 20;

        let secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent =
        'Start Guessing!!!';
        document.querySelector('.score').textContent =
        score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.
        backgroundColor = '#222';

        document.querySelector('.number').style.width = '15rem';
    })
});