const READLINE = require('readline');
const DOTENV = require('dotenv');
const FS = require('fs');
const AXIOS = require('axios');

const rl = READLINE.createInterface({
  input: process.stdin,
  output: process.stdout
});

let envConfig = DOTENV.parse(FS.readFileSync(__dirname + '/.env'));
for (let k in envConfig) {
  process.env[k] = envConfig[k];
}

let recursiveAsyncReadLine = function () {
  rl.question('Enter Movie Name to search : ', (name) => {

    console.log(`Searching for ${name} ...`);
    console.log('');

    AXIOS({
      url: `http://www.omdbapi.com/?t=${name}&apikey=${process.env.API_KEY}&r=json&type=movie`,
      method: 'GET'
    })
      .then((result) => {
        const data = result.data

        console.log(`MOVIE TITLE: ${data.Title}`);
        let rottenRatingValue = null
        if (data.Ratings.length > 0) {
          data.Ratings.filter(function (rating) {
            if (rating.Source == 'Rotten Tomatoes') {
              rottenRatingValue = rating.Value;
            }
          })
        }
        console.log(`MOVIE ROTTEN TOMATOES RATING: ${rottenRatingValue}`);
        console.log('');
        rl.question('Want to search another one ? (type YES or press any button for NO ): ', (res) => {
          if (res.toLowerCase() == "yes") {
            recursiveAsyncReadLine()
          } else {
            rl.close();
          }
        });
      });


  });
}

recursiveAsyncReadLine()