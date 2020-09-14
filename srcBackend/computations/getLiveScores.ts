import axios from 'axios';
import { Game, GameProps } from '../classes/Game';
import { Team } from '../classes/Team';

const apiUrl =
  'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

interface EspnGameApiResponse {
  id: string;
  date: string; // convert to date with Date.parse(___)

  status: {
    clock: number;
    displayClock: string;
    period: number;
    type: {
      state: string; // "pre"
      completed: boolean;
    };
  };

  competitions: {
    venue: {
      fullName: string;
    };

    competitors: {
      id: string;
      uid: string;
      homeAway: string;
      score: string;
      records: {
        name: string;
        summary: string; // This is the team's record EX: "0-0"
      }[];
      team: {
        abbreviation: string;
      };
    }[];

    broadcasts: {
      names: string[];
    }[];

    odds?: {
      details: string;
      overUnder: number;
    }[];
  }[];
}

export interface LiveScores {
  week: number;
  games: Game[];
}

export default function getLiveScores(teams: {
  [key: string]: Team;
}): Promise<LiveScores> {
  return axios
    .get(apiUrl)
    .then((res) => {
      const liveScores: LiveScores = {
        week: res.data.week.number,
        games: [],
      };

      const games: EspnGameApiResponse[] = res.data.events;

      for (let game of games) {
        // Process gambling information
        const odds = game.competitions[0].odds;
        let line = '';
        let total = 0;
        if (odds) {
          line = odds[0].details;
          total = odds[0].overUnder;
        }

        const awayTeam = game.competitions[0].competitors[1];
        const homeTeam = game.competitions[0].competitors[0];

        const awayAbbr = awayTeam.team.abbreviation;
        const homeAbbr = homeTeam.team.abbreviation;

        // Split record string (ex: "1-1") into an array ["1", "1"]
        const awayTeamRecord = awayTeam.records[0].summary.split('-');
        const homeTeamRecord = homeTeam.records[0].summary.split('-');

        // Update each team's wins, losses and ties through classes
        teams[awayAbbr].info.wins = parseInt(awayTeamRecord[0]);
        teams[homeAbbr].info.wins = parseInt(homeTeamRecord[0]);

        teams[awayAbbr].info.losses = parseInt(awayTeamRecord[1]);
        teams[homeAbbr].info.losses = parseInt(homeTeamRecord[1]);

        if (awayTeamRecord[2]) {
          // If they have ties
          teams[awayAbbr].info.ties = parseInt(awayTeamRecord[2]);
        }
        if (homeTeamRecord[2]) {
          teams[homeAbbr].info.ties = parseInt(homeTeamRecord[2]);
        }

        const gameProps: GameProps = {
          id: game.id,
          date: new Date(game.date),
          state: game.status.type.state,
          isFinished: game.status.type.completed,
          home: teams[homeAbbr],
          away: teams[awayAbbr],
          homeScore: homeTeam.score,
          awayScore: awayTeam.score,
          line: line,
          total: total,
          quarter: game.status.period,
          clock: game.status.displayClock,
          stadium: game.competitions[0].venue.fullName,
          tvNetwork: game.competitions[0].broadcasts[0].names[0],
        };

        // Determine winner if game is finished
        if (gameProps.isFinished) {
          if (gameProps.homeScore === gameProps.awayScore) {
            gameProps.winnerAbbr = 'tie';
          } else if (gameProps.homeScore > gameProps.awayScore) {
            gameProps.winnerAbbr = gameProps.home.info.abbr;
          } else if (gameProps.awayScore > gameProps.homeScore) {
            gameProps.winnerAbbr = gameProps.away.info.abbr;
          }
        }

        liveScores.games.push(new Game(gameProps));
      }

      return liveScores;
    })
    .catch((err) => err);
}
