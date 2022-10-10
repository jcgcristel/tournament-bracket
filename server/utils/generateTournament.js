// Match class import
import Match from './generateMatch.js';
// uuid imported to create unique IDs for tournament
import {v4 as uuidv4 } from 'uuid';

// Tournament class which will create instances of torunament as well as generate tournaments
class Tournament {
    constructor(tournamentName, username, tournamentSize, teams) {
        this.tournamentName = tournamentName,
        this.tournamentId = uuidv4(),
        this.username = username,
        this.tournamentSize = tournamentSize,
        this.teams = teams,
        this.matches = []
        // Final round used to tell how many rounds a tournament should have so that generateMatches knows when to stop recursivelly calling itself
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

    // Class method to generate tournaments. Starts by generating championship match then works backwards to generate two preceding matches. Continues recursively until first round reached
    generateMatches(round=this.finalRound, nextMatch='') {
        if (round > 0) {
            let match = new Match(this.tournamentId, round, nextMatch)
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

// Added "type": "module" to package.json to test funcion quickly

// EXAMPLE USE OF TOURNAMENT CLASS:
// let tournament = new Tournament('test', 'user1', 4, ['team1', 'team2'])

// tournament.generateMatches();

// Output:

// Match {
//     tournamentId: 'c28ec84a-14eb-439d-88c3-8ea862a2e276',
//     round: 2,
//     matchId: '0091ac2b-6007-47ce-8ecc-b330ac9c4b88',
//     teams: [],
//     nextMatch: ''
//   }
//   Match {
//     tournamentId: 'c28ec84a-14eb-439d-88c3-8ea862a2e276',
//     round: 1,
//     matchId: '646d42f1-a65d-4fc2-9139-30286737dc51',
//     teams: [],
//     nextMatch: '0091ac2b-6007-47ce-8ecc-b330ac9c4b88'
//   }
//   Match {
//     tournamentId: 'c28ec84a-14eb-439d-88c3-8ea862a2e276',
//     round: 1,
//     matchId: '66473202-fb25-4338-882a-7003f8d0d019',
//     teams: [],
//     nextMatch: '0091ac2b-6007-47ce-8ecc-b330ac9c4b88'
//   }

// console.log(tournament.finalRound)

export default Tournament;