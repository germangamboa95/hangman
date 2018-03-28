
window.onload = () => {
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
const syno = document.getElementById('hints');

introCard.style.display = 'block';
introCard.addEventListener('click', () =>{
  instructionsCard.style.display = 'block';
  introCard.style.display = 'none';
});

instructionsCard.addEventListener('click', () => {
  gameCard.style.display = 'block';
  instructionsCard.style.display = 'none';
});



let gamedata = Game.init();
Ui.updateUi(currentWord, gamedata.dash);
gameCard.addEventListener('click', () => Ui.updateUi(syno, gamedata.synonyms.map(item => item = `<li>${item.definition}</li>`).join('')));
input.addEventListener(
  'keyup',
   e => {
     input.value = '';
     let letter = e.key;
     gamedata = Game.play(letter);
     console.log(gamedata);
     Ui.updateUi(currentWord, gamedata.dash);
     Ui.updateUi(pSaved, `Patients saved: ${gamedata.won}.`);
     Ui.updateUi(pLost, `Patients lost: ${gamedata.lost}.`);
     Ui.updateUi(lettersTried, gamedata.lettersTried.map(item => item = `<span>${item}</span>`).join(''));
     Ui.updateUi(syno, gamedata.synonyms.map(item => item = `<li>${item.definition}</li>`).join(''));
     Ui.removePart(images[gamedata.tries]);
     if(gamedata.resetImg) {
       Ui.resetImg(images);
       Game.gamedata.resetImg = false;
     }

   }
);

};
