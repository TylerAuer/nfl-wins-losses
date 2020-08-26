"use strict";
// Execute all the build files
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAll = void 0;
var buildOwners_1 = require("./buildOwners");
var buildTeams_1 = require("./buildTeams");
function buildAll() {
    buildOwners_1.buildOwners();
    buildTeams_1.buildTeams();
    return;
}
exports.buildAll = buildAll;
