
//Global
const words = ['hives', 'fever', 'nausea', 'injury'];
const introCard = document.getElementById('intro');
const instructionsCard = document.getElementById('instructions');
const gameCard = document.getElementById('game-card');
const currentWord = document.getElementById('current-word');
const lettersTried = document.getElementById('letters-tried');
const pSaved = document.getElementById('p-saved');
const pLost = document.getElementById('p-lost');
const rand = (len) => Math.floor(Math.random() * len);
let dataObj;
const re = /A-Z/;



function startGame(){

  document.addEventListener('keyup', (e) =>{
    let letter = e.key;
    if(game.checkLetter(letter, game.wordSelected)){
      let x = ui.getLetterPos(game.wordSelected, letter);
      ui.dash = ui.updateDash(ui.dash,letter, x);
      currentWord.innerText = ui.dash;


      if(ui.dash == game.wordSelected){
        game.won++;
        pSaved.innerText = `Patients saved: ${game.won}`;
        console.log('you win!');
        int();
      }

    } else{
      game.wrongGuesses++;
      lettersTried.innerHTML +=`<span>${letter}</span>`;
      if(game.wrongGuesses > 10){
        lettersTried.innerHTML = '';
        game.wrongGuesses = 0;
        game.lost++;
        pLost.innerText = `Patients Lost: ${game.lost}`;
        console.log('you lost');
        int();
      }
    }
  });
}

function int() {
  introCard.addEventListener('click', () => ui.slideOut(introCard));
  game.wordSelected = game.words[game.rand(game.wordsLen())];
  ui.dash = ui.dashCreator(game.wordSelected);
  currentWord.innerText = ui.dash;
  console.log(game.wordSelected);
  instructionsCard.addEventListener('click', () => {
    startGame();
 });

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


function getData(req){
  return fetch('https://wordsapiv1.p.mashape.com/words/' + req +'/synonyms',{
    method: 'GET',
    headers: {
      "X-Mashape-Key": "OloVJ7GerTmshG15D1KZdhw44Cfup168hdrjsn43mg7QZtFgop",
      "X-Mashape-Host":"wordsapiv1.p.mashape.com"
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
