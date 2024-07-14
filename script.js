'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  let highscore = 0;

    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    }

  if (!guess && score > 0) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (secretNumber === guess && score > 0) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (secretNumber !== guess && score > 0) {
    displayMessage(secretNumber > guess ? '📉 Too Low!' : '📈 Too High!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score === 0) {
    displayMessage('You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
