const fs = require('fs');
const axios = require('axios');

/*
Downloads each team's logo

API was missing about 6 teams' logos
*/
const API = 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';

const downloadTeamLogos = async () => {
  const apiData = await axios.get(API).then((res) => res.data);
  const teamList = apiData.sports[0].leagues[0].teams;

  teamList.forEach((team) => {
    const abbr = team.team.abbreviation;
    const href = team.team.logos[0].href;
    axios({
      method: 'get',
      url: href,
      responseType: 'stream',
    }).then((res) => {
      res.data.pipe(fs.createWriteStream(`${abbr}.png`));
    });
  });
};

downloadTeamLogos();
