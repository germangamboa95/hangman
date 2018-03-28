const Game = {

  gamedata: {

    words: ['hives', 'fever', 'nausea', 'injury'],

    selected: '',

    tries: 8,

    lost: 0,

    won: 0,

    dash: '',

    restart: false,

    lettersTried: []
  },

  dashCreator: word => word.split('').map(item => item = '-').join(''),

  updateDash: (dash, letter, pos) => {
    dash = dash.split('');
    pos.forEach(item => dash[item] = letter);
    return dash.join('');
  },

  getLetterPos: (word, letter) => {
    let arr = [];
    word.split('').forEach((item, index) => {
      if (item === letter) arr.push(index);
    });
    return arr;
  },

  checkLetter: (letter, word) => (word.split('').indexOf(letter) > -1) ? true : false,

  rand: (len) => Math.floor(Math.random() * len),

  init() {
    let data = this.gamedata;
    data.selected = data.words[this.rand(data.words.length)];
    data.dash = this.dashCreator(data.selected);
    console.log(data.selected);
  },

  play(letter) {

    const re = /^([a-z])$/;
    let data = this.gamedata;

    if (re.test(letter)) {


      let isCorrect = this.checkLetter(letter, data.selected);

      if (isCorrect) {

        let pos = this.getLetterPos(data.selected, letter);

        data.dash = this.updateDash(data.dash, letter, pos);

      } else if(data.lettersTried.indexOf(letter) > -1 ){
        console.log('do not be silly');
      } else {
        data.lettersTried.push(letter);
        data.tries--;
      }

      if (data.dash.trim() == data.selected.trim()) {
        data.won++;
        data.restart = true;
      }

      if (data.tries == 0) {
        data.lost++;
        data.restart = true;

      }

    }

    if (data.restart) {
      console.log('game reset');
      data.restart = false;
      data.tries = 8;
      data.selected = data.words[this.rand(data.words.length)];
      data.dash = this.dashCreator(data.selected);
      console.log("Reset", data);
    }

    return data;

  }
};









const Ui = {

  removePart: (id) => {
    id.style.display = "none";
  },

  resetImg: (ids) => {
    for (let i = 0; i < ids.length; i++) {
      ids[i].style.display = 'inline-block';
    }
  },

  updateUi: (id, data) => {
    id.innerHTML = data;
  }
};
