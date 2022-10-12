// Import uuid to generate random codes for match ID
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');

// Match class
class Match {
    constructor(tournamentId, round, nextMatch='') {
        this.uid = uuidv4(),
        this.tournament_uid = tournamentId,
        this.matchNumber;
        this.round = round,
        this.teams = [],
        this.winner = '',
        this.next_match = nextMatch
        // this.previousMatches = previousMatch
    }

    // static generateMatchId() {
    //     return uuidv4();
    // }
    
    // get tournamentId() {;
    //     return this.tournamentId
    // }

    // get matchId() {
    //     return this.matchId;
    // }

    // get round() {
    //     return this.round;
    // }

    // get matchId() {
    //     return this.matchId;
    // }

    // get nextMatch() {
    //     return this.nextMatch;
    // }

    // get previousMatch() {
    //     return this.previousMatch;
    // }

    // get teams() {
    //     return this.teams;
    // }

    // set teams(teams) {
    //     this.teams = teams;
    // }

    // set nextMatch(nextMatch) {
    //     this.nextMatch = nextMatch;
    // }

    // set previousMatch(previousMatch) {
    //     this.previousMatch = previousMatch;
    // }
};

// export default Match;
module.exports = Match;