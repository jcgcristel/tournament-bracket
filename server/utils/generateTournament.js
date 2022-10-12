// Match class import
const Match = require('./generateMatch.js');
// uuid imported to create unique IDs for tournament
// import {v4 as uuidv4 } from 'uuid';
const {v4: uuidv4} = require('uuid');

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

    // Set teams for first round matchups before storing matches and tournament in DB
    setFirstRoundTeamMatchups() {
        for (let i = 0; i < this.matches.length; i ++) {
            if (this.matches[i].round === 1) {
                this.matches[i].teams = this.teams[i];
            }
            else {
                break;
            }
        }
    }
}

// Added "type": "module" to package.json to test funcion quickly

// EXAMPLE USE OF TOURNAMENT CLASS:
// let tournament = new Tournament('test', 'user1', 8, [['team1', 'team2'], ['team3', 'team4'], ['team5', 'team6'], ['team7', 'team8']]);

// tournament.generateMatches();
// tournament.sortMatches();
// tournament.setFirstRoundTeamMatchups();
// console.log(tournament);

// Output:
                  
// Tournament {
//     tournamentName: 'test',
//     tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//     username: 'user1',
//     tournamentSize: 8,
//     teams: [
//       [ 'team1', 'team2' ],
//       [ 'team3', 'team4' ],
//       [ 'team5', 'team6' ],
//       [ 'team7', 'team8' ]
//     ],
//     matches: [
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 1,
//         matchId: '3bee6a08-94b4-4627-8f26-2d587173ae5e',
//         teams: [Array],
//         nextMatch: 'd8412198-1735-453e-a288-0bff1b1266ee',
//         winner: '',
//         matchNumber: 0
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 1,
//         matchId: '545376f4-1fa2-4981-9c28-274d061e6395',
//         teams: [Array],
//         nextMatch: 'd8412198-1735-453e-a288-0bff1b1266ee',
//         winner: '',
//         matchNumber: 1
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 1,
//         matchId: '5a326841-cae5-46c9-9235-53a1eb53196a',
//         teams: [Array],
//         nextMatch: 'e3b7e21d-5a0e-421d-a401-11be2ae9c70a',
//         winner: '',
//         matchNumber: 2
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 1,
//         matchId: 'fab9b64c-ab61-4a12-92f3-c33296096814',
//         teams: [Array],
//         nextMatch: 'e3b7e21d-5a0e-421d-a401-11be2ae9c70a',
//         winner: '',
//         matchNumber: 3
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 2,
//         matchId: 'd8412198-1735-453e-a288-0bff1b1266ee',
//         teams: [],
//         nextMatch: 'b387c77f-df78-41cf-8a8c-c77302c34aa3',
//         winner: '',
//         matchNumber: 4
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 2,
//         matchId: 'e3b7e21d-5a0e-421d-a401-11be2ae9c70a',
//         teams: [],
//         nextMatch: 'b387c77f-df78-41cf-8a8c-c77302c34aa3',
//         winner: '',
//         matchNumber: 5
//       },
//       Match {
//         tournamentId: '67eac20d-a94b-4f7a-a05f-f319e71da0da',
//         round: 3,
//         matchId: 'b387c77f-df78-41cf-8a8c-c77302c34aa3',
//         teams: [],
//         nextMatch: '',
//         winner: '',
//         matchNumber: 6
//       }
//     ],
//     finalRound: 3
//   }

module.exports =  Tournament;