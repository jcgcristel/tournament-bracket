import Match from './generateMatch.js';
import {v4 as uuidv4 } from 'uuid';

class Tournament {
    constructor(tournamentName, username, tournamentSize, teams) {
        this.tournamentName = tournamentName,
        this.tournamentId = uuidv4(),
        this.username = username,
        this.tournamentSize = tournamentSize,
        this.teams = teams,
        this.matches = []
        this.finalRound = (function() {
            switch (tournamentSize) {
                case 4:
                    return 2;
                
                case 8:
                    return 3;
    
                case 16:
                    return 4;
            }
        })()
    }

    generateMatches(round=this.finalRound, nextMatch='') {
        if (round > 0) {
            let match = new Match(this.tournamentId, round, nextMatch)
            console.log(match)
            this.matches.push(match);

            round -= 1;

            this.generateMatches(round, match.matchId);
            this.generateMatches(round, match.matchId);
        }
        else {
            return;
        }
    }
}

let tournament = new Tournament('test', 'user1', 4, ['team1', 'team2'])

tournament.generateMatches();

console.log(tournament.finalRound)

export default Tournament;