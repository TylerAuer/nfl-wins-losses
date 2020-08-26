import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/client'));

app.get('/', (req: Request, res: Response) =>
  res.sendFile(__dirname + '/client/index.html')
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
