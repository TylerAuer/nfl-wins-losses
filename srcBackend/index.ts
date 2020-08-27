import express, { Request, Response } from 'express';
import { buildTeams } from './onStart/buildTeams';
import { buildPicks } from './onStart/buildPicks';
import { buildOwners } from './onStart/buildOwners';
import sendStandings from './routes/standings';
import sendOwners from './routes/owners';
import sendScoreboard from './routes/scoreboard';
import sendBump from './routes/bump';
import { Log } from './Log';

////////////////////////////////////////////////////////////////////////////////
//   CONFIGURE APP   ///////////////////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 4000;

////////////////////////////////////////////////////////////////////////////////
//   GENERATE INITIAL DATA   ///////////////////////////////////////////////////
//
// Generates initial data state which is then updated on subsequent API
// calls to monitor live games, league standings, and bump chart data
//
const initializeData = async (): Promise<void> => {
  const teams = await buildTeams();
  Log.init(`Teams`);

  const picks = await buildPicks(teams);
  Log.init(`Picks`);

  const owners = await buildOwners(picks);
  Log.init(`Owners`);

  app.locals.teams = teams;
  app.locals.picks = picks;
  app.locals.owners = owners;
};

initializeData();

////////////////////////////////////////////////////////////////////////////////
//   SERVE CLIENT APP   ////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/client'));

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/client/index.html');
});

////////////////////////////////////////////////////////////////////////////////
//   BACKEND ROUTES   //////////////////////////////////////////////////////////

app.get('/standings', sendStandings);
app.get('/scoreboard', sendScoreboard);
app.get('/owners', sendOwners);
app.get('/bump', sendBump);

////////////////////////////////////////////////////////////////////////////////
//   START SERVER   ////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Spinning up app on port: ${port}`);
});
