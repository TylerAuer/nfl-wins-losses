const fs = require('fs');
const axios = require('axios');

const API =
  'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=900';

const getTeamInfo = async () => {
  const apiResponse = await axios.get(API);
  const teams = apiResponse.data.sports[0].leagues[0].teams;
  //console.log(teams);

  const teamData = await teams.map((team) => {
    team = team.team;
    return {
      espnId: parseInt(team.id),
      espnUid: team.uid,
      fullName: team.displayName,
      abbr: team.abbreviation,
      mascot: team.name,
      location: team.location,
      colorPrimaryHex: team.color,
      colorSecondaryHex: team.alternateColor,
      espnLink: team.links[0].href,
    };
  });

  const dataAsString = JSON.stringify({ teams: teamData });

  fs.writeFile('test.json', dataAsString, 'utf8', (err) => console.log(err));
};

getTeamInfo();
