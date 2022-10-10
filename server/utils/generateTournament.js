// Match class import
import Match from './generateMatch.js';
// uuid imported to create unique IDs for tournament
import {v4 as uuidv4 } from 'uuid';

// Tournament class which will create instances of torunament as well as generate tournaments
class Tournament {
    constructor(tournamentName, userId, tournamentSize, teams) {
        this.tournamentName = tournamentName,
        this.tournamentId = uuidv4(),
        this.username = userId,
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

    // Class method to first sort matches by round then sort matches by next match ID
    sortMatches() {
        this.matches.sort(function(a,b) {
            return a.round - b.round || a.nextMatch - b.nextMatch;
        })
    }
}

// Added "type": "module" to package.json to test funcion quickly

// EXAMPLE USE OF TOURNAMENT CLASS:
let tournament = new Tournament('test', 'user1', 8, ['team1', 'team2']);

tournament.generateMatches();
tournament.sortMatches();
console.log(tournament);

// Output:
                  
// Tournament {
// tournamentName: 'test',
// tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
// username: 'user1',
// tournamentSize: 8,
// teams: [ 'team1', 'team2' ],
// matches: [
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 3,
//     matchId: '8133d99d-32a0-47d9-99e8-0f1f98e2860b',
//     teams: [],
//     nextMatch: '',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 2,
//     matchId: '492dea26-23e3-4d6c-9134-f53d8a7c3834',
//     teams: [],
//     nextMatch: '8133d99d-32a0-47d9-99e8-0f1f98e2860b',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 1,
//     matchId: '36c6b175-a51c-402c-9a92-c4af2b3b43a1',
//     teams: [],
//     nextMatch: '492dea26-23e3-4d6c-9134-f53d8a7c3834',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 1,
//     matchId: 'bb18804c-f33c-4450-a7e3-e278147e893e',
//     teams: [],
//     nextMatch: '492dea26-23e3-4d6c-9134-f53d8a7c3834',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 2,
//     matchId: 'b2e193a2-1936-4d90-b24c-1190ba23e6fa',
//     teams: [],
//     nextMatch: '8133d99d-32a0-47d9-99e8-0f1f98e2860b',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 1,
//     matchId: 'c41d2516-e8a6-4f6f-9778-addc5fcc253b',
//     teams: [],
//     nextMatch: 'b2e193a2-1936-4d90-b24c-1190ba23e6fa',
//     winner: ''
//     },
//     Match {
//     tournamentId: 'ac5f7dca-66d0-4607-ad1e-d75ef88089e0',
//     round: 1,
//     matchId: '976a3e7f-ca69-474c-84c7-711ffbe232a6',
//     teams: [],
//     nextMatch: 'b2e193a2-1936-4d90-b24c-1190ba23e6fa',
//     winner: ''
//     }
// ],
// finalRound: 3
// }

export default Tournament;