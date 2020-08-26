"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(apiInfo) {
        this.apiInfo = apiInfo;
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
    }
    Object.defineProperty(Team.prototype, "record", {
        // Team's current record in '10 - 6' format or or '10 - 6 - 1' format if a
        // team has had a tie.
        get: function () {
            var record = this.wins + " - " + this.losses;
            // Only add ties to the record if the team has had a tie
            if (this.ties > 0) {
                record += " - " + this.ties;
            }
            return record;
        },
        enumerable: false,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;
