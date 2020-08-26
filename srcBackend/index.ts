import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 4000;

////////////////////////////////////////////////////////////////////////////////
//   SERVE CLIENT APP   ////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/client'));

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/client/index.html');
});

////////////////////////////////////////////////////////////////////////////////
//   BACKEND ROUTES   //////////////////////////////////////////////////////////

app.get('/standings', (req: Request, res: Response): void => {
  res.send('JSON for league standings');
});
app.get('/scoreboard', (req: Request, res: Response): void => {
  res.send('JSON for live NFL scoreboard');
});
app.get('/bump', (req: Request, res: Response): void => {
  res.send('Data for bump chart');
});

////////////////////////////////////////////////////////////////////////////////
//   START SERVER   ////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Spinning up app on port: ${port}`);
});

console.log('Hi, Earth!');
