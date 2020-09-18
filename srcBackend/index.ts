import express, { Request, Response, NextFunction } from 'express';
import { Log } from './Log';
import { buildTeams } from './onStart/buildTeams';
import { buildPicks } from './onStart/buildPicks';
import { buildOwners } from './onStart/buildOwners';
import sendOwnersByTeam from './endpoints/sendOwnersByTeam';
import sendScoreboard from './endpoints/sendScoreboard';
import sendRankings from './endpoints/sendRankings';
import sendBump from './endpoints/sendBump';

////////////////////////////////////////////////////////////////////////////////
//   CONFIGURE APP   ///////////////////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 8080;

////////////////////////////////////////////////////////////////////////////////
//   INIT HTTPS FORWARDING//////////////////////////////////////////////////////

const requireHTTPS = (req: Request, res: Response, next: NextFunction) => {
  if (
    !req.secure &&
    // The 'x-forwarded-proto' check is for Heroku
    req.get('x-forwarded-proto') !== 'https' &&
    process.env.NODE_ENV !== 'development'
  ) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};
app.use(requireHTTPS);

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
//   API ENDPOINTS   ///////////////////////////////////////////////////////////

app.get('/rankings', sendRankings);
app.get('/scoreboard', sendScoreboard);
app.get('/owners-by-team', sendOwnersByTeam);
app.get('/bump', sendBump);

////////////////////////////////////////////////////////////////////////////////
//   START SERVER   ////////////////////////////////////////////////////////////

app.listen(port, () => {
  Log.init(`Spinning up app on port: ${port}`);
});
