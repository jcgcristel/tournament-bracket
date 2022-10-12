const { getRounds } = require('bcrypt');
const { log2, pow } = require('mathjs');

const tournamentObj = {
    _id: '1',
    tournament_name: 'name',
    teams: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8',]
            // 'Team9', 'Team10', 'Team11', 'Team12', 'Team13', 'Team14', 'Team15', 'Team16']
}

function calcRounds(teamsArr) {
    return log2(teamsArr.length);
}

function generateMatches(teamsArr) {
    // Teams / 2
    const matches = [];
    
    var matchCount = teamsArr.length-1;
    var currentMatch = teamsArr.length;
    var prevMatch = 0;
    var vs = 2;
    
    // for (var i = 1; i <= calcRounds(teamsArr)/Math.log(2)-1; i++){
        for (var i = calcRounds(teamsArr); i >= 1; --i) {

            let matchesInRound = teamsArr.length/(pow(2, i));

            for (var k = 1; k <= matchesInRound; ++k){
                    currentMatch--;
                    
                    matchObject = {
                        _id: currentMatch,
                        round: i,
                        next_match: '',
                        teams: ''
                    }
                    matches.push(matchObject);                
            }
        }
    return matches;
}

function nextMatches(matches) {
    
}

console.log(generateMatches(tournamentObj.teams));

// function seeding(numPlayers){
//     var rounds = Math.log(numPlayers)/Math.log(2)-1;
//     var pls = [1,2];
//     for(var i=0;i<rounds;i++){
//       pls = nextLayer(pls);
//     }
//     console.log
//     return pls;
//     function nextLayer(pls){
//       var out=[];
//       var length = pls.length*2+1;
//       pls.forEach(function(d){
//         out.push(d);
//         out.push(length-d);
//       });
//       console.log(out)
//       return out;
//     }
//   }
  

//   console.log(seeding(8));
