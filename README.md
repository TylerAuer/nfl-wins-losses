# NFL Wins / Losses League

A site to track an NFL league with family and friends. Players draft teams to earn points for each win or loss over the course of the NFL season. 

The backend pulls data from ESPN APIs (with caching to limit requests) then processes it into endpoints for a React frontend.

I hacked together a version of this site a year ago when I was just learning JavaScript. Compare this repository to the <a href="https://github.com/TylerAuer/nfl-clientside">source code</a> from last year's app to see how far I've come in 10 months.

[![Snapshot of site in Week 1](https://github.com/TylerAuer/nfl-wins-losses/blob/master/snapshot.png)](https://nfl.tylerauer.com)

## Technologies

The backend is build with [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/) which make calls to ESPN APIs and process the data into endpoints for a [React](https://reactjs.org/) frontend. The site is hosted with [Heroku](https://www.heroku.com/home) which makes maintenance efficient -- pushes to `master` automatically create and deploy new builds.

## Feature Roadmap

- D3 Bump Chart tracking each player's ranking from week-to-week
- Add possession, down and distance, and yardline to active games
- Sort active games in some logical way (user toggled owner's games on top, then active games...)
- Rebrand of Who Are You Rooting Against?

## How the league works

Before the season, everyone drafts teams for either their wins or their losses. For example, you might draft:

- Giants wins (someone can also draft Giants losses but no one else can draft Giant wins)
- Cowboys losses
- Eagles losses
- Washington losses

As the season progresses, you get a point for each matching result. So, if the Giants go 10 - 6, they'd be worth 10 points at the end of the year. The person who drafted Giants losses would get 6 points.

**Both sides (wins and losses) of the same team can be drafted.** This means you are often rooting against someone else each week.

## APIs

- http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard
- http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100
- https://site.api.espn.com/apis/v2/sports/football/nfl/standings
- [PFR - Win Probability](https://www.pro-football-reference.com/play-index/win_prob.cgi) - They plan to move this behind a paywall shortly

## To Run Locally

1. Clone repo
2. Run `npm install` to install dependencies
3. Start backend with `node run spin`
4. Start frontend with `npm start`
5. Open app in browser (use local host port shown when you start the frontend)
6. Have fun!
