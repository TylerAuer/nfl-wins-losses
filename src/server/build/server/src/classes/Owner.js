"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
var Owner = /** @class */ (function () {
    function Owner(info) {
        this.info = info;
    }
    Owner.prototype.currentScore = function () {
        // Total points based on wins or losses and matching pick type
        return 0;
    };
    Owner.prototype.tieBreakers = function () {
        /** Returns an array of tiebreakers
         * Total Points
         * Round 6 points
         * Round 5 points
         * ...
         * Round 1 points
         * 10 - roundOnePickNumber (so highest is always better)
         */
        return [this.currentScore(), 0];
    };
    return Owner;
}());
exports.Owner = Owner;
