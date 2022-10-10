// Import uuid to generate random codes for match ID
import { v4 as uuidv4 } from 'uuid';

// Match class
class Match {
    constructor(tournamentId, round, nextMatch='') {
        this.tournamentId = tournamentId,
        this.round = round,
        this.matchId = uuidv4(),
        this.teams = [],
        this.nextMatch = nextMatch
        this.winner = ''
        this.matchNumber;
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

export default Match;