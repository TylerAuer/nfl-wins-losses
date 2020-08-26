NFL Wins / Losses League

A site to track an NFL league with family and friends.

## How the league works

Before the season, everyone drafts teams for either their wins or their losses. For example, you might draft:

* Giants wins (someone can also draft Giants losses but no one else can draft Giant wins)
* Cowboys losses
* Eagles losses
* Washington losses

As the season progresses, you get a point for each matching result. So, if the Giants go 10 - 6, they'd be worth 10 points at the end of the year. The person who drafted Giants losses would get 6 points.

**Both sides (wins and losses) of the same team can be drafted.** This means you are often rooting against someone else each week.

## APIs

* ESPN APIs
  * http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard
  * http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100
  * https://site.api.espn.com/apis/v2/sports/football/nfl/standings

## Scraping

* Scrape scores for weeks 1 - 17 - Same function for all 17 pages, can store all of the data into some data structure to THEN be parsed.
  * Parse wins + losses
  * Parse any live games
  * Parse teams' schedules (EXT)
* Scrape live win probabilities (EXT)
* Cache scraped data every 30 seconds so not hitting the server too often

## Calulations

* Current points for each owner
* Estimated points (using win probabilities)
* High stakes games (when an owner has wins for one team and losses for the other)
* Max points per team
* Max points per owner (sum of points per owned team subtracting when you play yourself)
* Standings (factoring in tiebreakers)
* Simulations of seasons to predict likeliest winners

## Scraping Sources

* [PFR - all final (includes OT)](https://web.archive.org/web/20181022170146/https://www.pro-football-reference.com/boxscores/)
* 