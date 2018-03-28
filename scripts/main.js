//Global
const words = ['hives', 'fever', 'nausea', 'injury'];
const introCard = document.getElementById('intro');
const instructionsCard = document.getElementById('instructions');
const gameCard = document.getElementById('game-card');
const currentWord = document.getElementById('current-word');
const lettersTried = document.getElementById('letters-tried');
const pSaved = document.getElementById('p-saved');
const pLost = document.getElementById('p-lost');
const input = document.getElementById('input');
const images = document.querySelectorAll('.game-img');
let dataObj;
const re = /^([a-z])$/;

console.log(images);

function startGame() {

  input.addEventListener('keyup', (e) => {
    let letter = e.key;
    console.log(game.wrongGuesses);
    let test = re.test(letter);

    if (test) {

      if (game.checkLetter(letter, game.wordSelected)) {
        let x = game.getLetterPos(game.wordSelected, letter);
        game.dash = game.updateDash(game.dash, letter, x);
        currentWord.innerText = game.dash;


        if (game.dash == game.wordSelected) {
          lettersTried.innerHTML = '';
          game.won++;
          pSaved.innerText = `Patients saved: ${game.won}`;
          console.log('you win!');
        }

      } else {
        game.wrongGuesses--;

        if(images[game.wrongGuesses])ui.removePart(images[game.wrongGuesses]);
        lettersTried.innerHTML += `<span>${letter}</span>`;
        if (game.wrongGuesses == 0) {
          lettersTried.innerHTML = '';
          game.wrongGuesses = 8;
          game.lost++;
          pLost.innerText = `Patients Lost: ${game.lost}`;
          console.log('you lost');

        }
      }
    }
  });
}

function int() {
  ui.resetImg(images);
  game.wordSelected = game.words[game.rand(game.wordsLen())];
  game.dash = game.dashCreator(game.wordSelected);
  currentWord.innerText = game.dash;
  console.log(game.wordSelected);
  startGame();
}




int();









const initGame = () => {
  // let wordSelector = () => words[rand(words.length)];
  // getData('fever')
  // .then(res => res.json())
  // .then(data => {
  //   console.log(sortData(data));
  // });

};


function getData(req) {
  return fetch('https://wordsapiv1.p.mashape.com/words/' + req + '/synonyms', {
    method: 'GET',
    headers: {
      "X-Mashape-Key": "OloVJ7GerTmshG15D1KZdhw44Cfup168hdrjsn43mg7QZtFgop",
      "X-Mashape-Host": "wordsapiv1.p.mashape.com"
    }
  });
}

const sortData = (data) => {
  let obj = {
    word: data.word,
    synonyms: data.synonyms
  };
  return obj;
};
