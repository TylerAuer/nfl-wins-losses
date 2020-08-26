// Builds teams
import axios from 'axios';
import { Team } from '../classes/Team';
import { staticTeamData } from '../staticTeamData';

interface EspnTeamsApiResponse {
  team: {
    id: string;
    uid: string;
    links: {
      href: string;
    }[];
    displayName: string;
    abbreviation: string;
    name: string;
    location: string;
    color: string;
    alternateColor: string;
  };
}

export async function buildTeams(): Promise<{ [key: string]: Team }> {
  // Call ESPN's NFL team API
  const espnResponse = await axios.get(
    'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100'
  );
  const espnData = espnResponse.data.sports[0].leagues[0].teams;

  const teams: { [key: string]: Team } = {};
  espnData.forEach((team: EspnTeamsApiResponse) => {
    const t = team.team;
    const abbr = t.abbreviation;

    teams[abbr] = new Team({
      espnId: parseInt(t.id),
      espnUid: t.uid,
      espnLink: t.links[0].href,
      fullName: t.displayName,
      abbr: abbr,
      mascot: t.name,
      location: t.location,
      colorPrimaryHex: abbr === 'ATL' ? 'B01742' : t.color,
      colorSecondaryHex: t.alternateColor,
      conference: staticTeamData[t.abbreviation].conference,
      division: staticTeamData[t.abbreviation].division,
      byeWeek: staticTeamData[t.abbreviation].byeWeek,
    });
  });

  return teams;
}

export const teams = buildTeams();
