const game = {

  words: ['hives', 'fever', 'nausea', 'injury'],

  wordsLen: () => words.length,

  wordSelected: '',

  wrongGuesses: 7,

  lost: 0,

  won: 0,

  dash: '',

  dashCreator: word => word.split('').map(item => item = '-').join(''),

  updateDash: (dash, letter, pos) => {
    dash = dash.split('');
    pos.forEach(item => dash[item] = letter);
    return dash.join('');},

  getLetterPos: (word, letter) => {
    let arr = [];
    word.split('').forEach( (item, index) => {
      if(item === letter) arr.push(index);
    });
    return arr;
  },

  checkLetter: (letter, word) => (word.split('').indexOf(letter) > -1)? true: false,

  rand: (len) => Math.floor(Math.random() * len)

};

const ui = {


  slideIn: (id) => {
    id.style.display = 'block';
    id.classList.add('slideInRight');
  },

  slideOut: (id) => {
    id.classList.add('slideOutLeft');
  },

  removePart: (id) => {
    id.style.display = "none";
  },

  resetImg: (ids) => {
    for(let i = 0; i < ids.length; i++){
      ids[i].style.display ='inline-block';
    }
  }






};
