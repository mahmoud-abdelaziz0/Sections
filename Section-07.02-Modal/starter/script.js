'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
  //#region without sperate the functions outside
  // console.log(btnsShowModal[i])
  // btnsShowModal[i].addEventListener('click', function(){
  //   modal.classList.remove('hidden')
  //   overlay.classList.remove('hidden')
  // })

  // btnCloseModal.addEventListener('click', function(){
  //   modal.classList.add('hidden')
  //   overlay.classList.add('hidden')
  // })

  // overlay.addEventListener('click', function(){
  //   modal.classList.add('hidden')
  //   overlay.classList.add('hidden')
  // })
  //#endregion
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
});
