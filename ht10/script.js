const cards = document.querySelectorAll('.card');

var flippedCard = false;
var lockBoard = false;
var first, second

function random() {
  cards.forEach(card => {
    let rand = Math.floor(Math.random() * 10);
    card.style.order = rand;
  });
};

random();

function flipCard() {
  if (lockBoard) return;
  if (this === first) return;

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    first = this;

    return;
  }

  second = this;
  (first.dataset.check === second.dataset.check) ? fixedCards() : turnOverCards();
}

function fixedCards() {
  first.removeEventListener('click', flipCard);
  second.removeEventListener('click', flipCard);

  resetBoard();
}

function turnOverCards() {
  lockBoard = true;

  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  flippedCard = false;
  lockBoard = false;
  first = null;
  second = null;
}

cards.forEach(card => card.addEventListener('click', flipCard));
