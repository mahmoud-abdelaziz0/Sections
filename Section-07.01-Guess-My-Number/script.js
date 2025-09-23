'use strict';

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 55;
// document.querySelector('.message').textContent = '🎉 Correct Number'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess)
  if (!guess) {

    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number')
    document.querySelector('body').style.backgroundColor = '#FCC61D';

  } else if (guess === secretNumber) {

    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if(guess !== secretNumber){
    if (score > 1) {

      // document.querySelector('.message').textContent = guess > secretNumber? '↗️ To High': '↘️ To Low';
      let highOrLow = guess > secretNumber? '↗️ To High': '↘️ To Low'
      score--;
      displayMessage(highOrLow)
      
      document.querySelector('.score').textContent = score;

    } else {

      document.querySelector('body').style.backgroundColor = '#ED3F27';
      // document.querySelector('.message').textContent = '😞You Lost The Game!';
      displayMessage('😞You Lost The Game!')
      document.querySelector('.score').textContent = 0;

    }

  // } else if (guess > secretNumber) {

  //   if (score > 1) {

  //     document.querySelector('.message').textContent = '↗️ To High';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //   } else {

  //     document.querySelector('body').style.backgroundColor = '#ED3F27';
  //     document.querySelector('.message').textContent = '😞You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;

  //   }
  // } else if (guess < secretNumber) {

  //   if (score > 1) {

  //     document.querySelector('.message').textContent = '↘️ To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //   } else {

  //     document.querySelector('body').style.backgroundColor = '#ED3F27';
  //     document.querySelector('.message').textContent = '😞You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;

  //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
