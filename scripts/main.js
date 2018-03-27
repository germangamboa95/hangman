// var unirest = require('unirest');
// var fetch = require('node-fetch');

// unirest.get("https://wordsapiv1.p.mashape.com/words/German?random=true/synonyms")
// .header("X-Mashape-Key", "OloVJ7GerTmshG15D1KZdhw44Cfup168hdrjsn43mg7QZtFgop")
// .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });



// fetch('https://wordsapiv1.p.mashape.com/words/German',{
//   method: 'GET',
//   headers: {
//     "X-Mashape-Key": "OloVJ7GerTmshG15D1KZdhw44Cfup168hdrjsn43mg7QZtFgop",
//     "X-Mashape-Host":"wordsapiv1.p.mashape.com"
//   }
// })
//     .then(res => res.json())
//     .then(data => console.log(data));
//
const words = ['hives', 'fever', 'nausea'];

function getData(req){
  return fetch('https://wordsapiv1.p.mashape.com/words/' + req +'/typeOf',{
    method: 'GET',
    headers: {
      "X-Mashape-Key": "OloVJ7GerTmshG15D1KZdhw44Cfup168hdrjsn43mg7QZtFgop",
      "X-Mashape-Host":"wordsapiv1.p.mashape.com"
    }
  });
}

words.forEach(word => {
  let ajaxVal = [];
  getData(word)
    .then(res => res.json())
    .then(data => ajaxVal[0]);
});
