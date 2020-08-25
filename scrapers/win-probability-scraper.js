const cheerio = require('cheerio');
const fetch = require('node-fetch');

let url =
  'https://www.pro-football-reference.com/play-index/win_prob.cgi?request=1';
const gameData = {
  score_differential: 3,
  vegas_line: 4,
  quarter: 4,
  minutes: 2,
  seconds: 3,
  field: 'team',
  yds_from_goal: 77,
  down: 2,
  yds_to_go: 3,
};

for (let prop in gameData) {
  url += `&${prop}=${gameData[prop]}`;
}

fetch(url)
  .then((res) => res.text())
  .then((body) => {
    const winProb = parseFloat(
      body.match(/<h3>Win Probability: (\d+.\d+)%<\/h3>/)[1]
    );
    console.log(winProb);
  });
