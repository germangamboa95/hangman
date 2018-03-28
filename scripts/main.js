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

Game.init();

input.addEventListener(
  'keyup',
   e => {
     let letter = e.key;
     let gamedata = Game.play(letter);
     console.log(gamedata);

     input.value = '';
     Ui.updateUi(currentWord, gamedata.dash);
     Ui.updateUi(pSaved, `Patients saved ${gamedata.won}.`);
     Ui.updateUi(pLost, `Patients saved ${gamedata.lost}.`);
     Ui.updateUi(lettersTried, gamedata.lettersTried.map(item => item = `<span>${item}</span>`).join(''));
   }
);











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
