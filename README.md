# NFL Wins / Losses League

A site to track an NFL league with family and friends.

## TODO

- Rename Who Are You Rooting Against?
- Plan out bump chart, how to collect, store, and process the data
- Add possession, down and distance, and yardline to active games
- Sort active games in some logical way (toggledOwner's games on top, then active games)

## How the league works

Before the season, everyone drafts teams for either their wins or their losses. For example, you might draft:

- Giants wins (someone can also draft Giants losses but no one else can draft Giant wins)
- Cowboys losses
- Eagles losses
- Washington losses

As the season progresses, you get a point for each matching result. So, if the Giants go 10 - 6, they'd be worth 10 points at the end of the year. The person who drafted Giants losses would get 6 points.

**Both sides (wins and losses) of the same team can be drafted.** This means you are often rooting against someone else each week.

## APIs

- ESPN APIs
  - http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard
  - http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100
  - https://site.api.espn.com/apis/v2/sports/football/nfl/standings
- [PFR - all final (includes OT)](https://web.archive.org/web/20181022170146/https://www.pro-football-reference.com/boxscores/)
