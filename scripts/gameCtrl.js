const game = {

  words: ['hives', 'fever', 'nausea', 'injury'],

  wordsLen: () => words.length,

  wordSelected: '',

  wrongGuesses: 0,

  lost: 0,

  won: 0,

  checkLetter: (letter, word) => (word.split('').indexOf(letter) > -1)? true: false,

  rand: (len) => Math.floor(Math.random() * len)

};

const ui = {
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

  slideIn: (id) => {
    id.style.display = 'block';
    id.classList.add('slideInRight');
  },

  slideOut: (id) => {
    id.classList.add('slideOutLeft');
  }






};
