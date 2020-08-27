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
      team: {
        abbreviation: string;
      };
    }[];

    broadcasts: {
      names: string[];
    }[];

    odds: {
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
        const gameProps: GameProps = {
          id: game.id,
          date: new Date(game.date),
          state: game.status.type.state,
          isFinished: game.status.type.completed,
          home: teams[game.competitions[0].competitors[0].team.abbreviation],
          away: teams[game.competitions[0].competitors[1].team.abbreviation],
          homeScore: game.competitions[0].competitors[0].score,
          awayScore: game.competitions[0].competitors[1].score,
          line: game.competitions[0].odds[0].details,
          total: game.competitions[0].odds[0].overUnder,
          quarter: game.status.period,
          clock: game.status.displayClock,
          stadium: game.competitions[0].venue.fullName,
          tvNetwork: game.competitions[0].broadcasts[0].names[0],
        };

        liveScores.games.push(new Game(gameProps));
      }

      return liveScores;
    })
    .catch((err) => err);
}
