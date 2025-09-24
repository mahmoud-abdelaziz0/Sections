'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // Generating a random dic roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDice}.png`;

  // check for rolled 1: if true, switch to next player

  if (randomDice !== 1) {
    // add dice to current score
    currentScore += randomDice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

  }
});
