const fs = require('fs');
const path = require('path');
const axios = require('axios');

const url =
  'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

const scrapeScoreboardApi = async () => {
  const response = await axios.get(url);
  const data = response.data;

  const d = new Date();
  const filename = `${d.getHours()}-${d.getMinutes()}-scoreboard-data.json`;

  fs.writeFileSync(
    path.resolve(__dirname, `../scoreboardApiResponses/${filename}`),
    JSON.stringify(data)
  );

  console.log(`Wrote ${filename} to disk.`);
};

const delayInMs = 1000 * 60 * 10;
setInterval(scrapeScoreboardApi, delayInMs);
