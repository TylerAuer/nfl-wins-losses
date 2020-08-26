"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Status;
(function (Status) {
    Status["pregame"] = "pregame";
    Status["live"] = "live";
    Status["halftime"] = "halftime";
    Status["postgame"] = "postgame";
})(Status || (Status = {}));
var Possession;
(function (Possession) {
    Possession["home"] = "home";
    Possession["away"] = "away";
})(Possession || (Possession = {}));
var Game = /** @class */ (function () {
    function Game(info) {
        this.info = info;
    }
    return Game;
}());
exports.Game = Game;
