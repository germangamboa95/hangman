
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
let wrongGuesses = 0;
const re = /A-Z/;

const checkLetter = (letter, word) => (word.split('').indexOf(letter) > -1)? true: false;

const dashCreator = word => word.split('').map(item => item = '-').join('');


// FIX ME! Use a reduce eventually
const getLetterPos = (word, letter) => {
  let arr = [];
  word.split('').forEach( (item, index) => {
    if(item === letter) arr.push(index);
  });
  return arr;
};

const updateDash = (dash, letter, pos) => {
  dash = dash.split('');
  pos.forEach(item => dash[item] = letter);
  return dash.join('');
};

const game = () => {
  let wordSelector = 'fever';
  let dash = dashCreator(wordSelector);
  console.log(dash);
  document.addEventListener(
    'keyup',
    (e) => {
      let guess = checkLetter(e.key, wordSelector);

      if(guess){
        console.log('yep');
        let pos = getLetterPos(wordSelector, e.key);
        dash = updateDash(dash, e.key, pos);
        console.log(dash);
        if(dash === wordSelector) console.log('You win!');

      } else{
        wrongGuesses++;
      }


    }
  );
};

game();

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
