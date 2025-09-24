'use strict';

let randomNum = Math.trunc(Math.random() * 6) + 1
console.log(randomNum)

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

score0El.textContent = 0;
score1El.textContent = 0;