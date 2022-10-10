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
        for (let i = 0; i < this.matches.length; i ++) {
            this.matches[i].matchNumber = i;
        }
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
//     tournamentName: 'test',
//     tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//     username: 'user1',
//     tournamentSize: 8,
//     teams: [ 'team1', 'team2' ],
//     matches: [
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 1,
//         matchId: '60bd79cb-519c-439f-a642-a16db143cfe0',
//         teams: [],
//         nextMatch: 'c56f1271-b3a4-4606-a97d-12879fa00d70',
//         winner: '',
//         matchNumber: 0
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 1,
//         matchId: 'eec83db5-b1d5-4dd8-9745-13708335a6e0',
//         teams: [],
//         nextMatch: 'c56f1271-b3a4-4606-a97d-12879fa00d70',
//         winner: '',
//         matchNumber: 1
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 1,
//         matchId: '192e889a-fd70-4419-93c4-874227e8419c',
//         teams: [],
//         nextMatch: '7a9cbe7c-20b0-4ad8-bc7c-56125ee1b5c6',
//         winner: '',
//         matchNumber: 2
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 1,
//         matchId: 'a68f0f4a-acfa-4b26-a5b2-a598c4fa13ad',
//         teams: [],
//         nextMatch: '7a9cbe7c-20b0-4ad8-bc7c-56125ee1b5c6',
//         winner: '',
//         matchNumber: 3
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 2,
//         matchId: 'c56f1271-b3a4-4606-a97d-12879fa00d70',
//         teams: [],
//         nextMatch: '4b9a0566-b19e-4408-8b4a-74d068c1d5e8',
//         winner: '',
//         matchNumber: 4
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 2,
//         matchId: '7a9cbe7c-20b0-4ad8-bc7c-56125ee1b5c6',
//         teams: [],
//         nextMatch: '4b9a0566-b19e-4408-8b4a-74d068c1d5e8',
//         winner: '',
//         matchNumber: 5
//       },
//       Match {
//         tournamentId: '4c93a3bf-a7b7-4d1a-b5c2-77c0635b4200',
//         round: 3,
//         matchId: '4b9a0566-b19e-4408-8b4a-74d068c1d5e8',
//         teams: [],
//         nextMatch: '',
//         winner: '',
//         matchNumber: 6
//       }
//     ],
//     finalRound: 3
//   }

export default Tournament;