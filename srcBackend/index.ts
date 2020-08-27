import express, { Request, Response } from 'express';
import sendStandings from './routes/standings';
import sendScoreboard from './routes/scoreboard';
import sendBump from './routes/bump';
import { buildTeams } from './onStart/buildTeams';
import { Log } from './Log';

////////////////////////////////////////////////////////////////////////////////
//   CONFIGURE APP   ///////////////////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 4000;

////////////////////////////////////////////////////////////////////////////////
//   GENERATE INITIAL DATA   ///////////////////////////////////////////////////
//
// Initializes initial data state which is then updated on subsequent API
// calls to monitor live games, league standings, and bump chart data
//
const initializeData = (): void => {
  buildTeams().then((data) => (app.locals.teams = data));
  Log.init(`Team Data`);
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
app.get('/bump', sendBump);

////////////////////////////////////////////////////////////////////////////////
//   START SERVER   ////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Spinning up app on port: ${port}`);
});
