// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Tournament {
    _id: ID
    tournament_name: String
    createdAt: String
    username: String
    teamsCount: Int
    matchCount: Int
    teams: [Team]
  }
  type Team {
    _id: ID
    team_name: String
    tournament_name: String
  }
  type Query {
    tournaments(username: String): [Tournament]
  }
`;

// export the typeDefs
module.exports = typeDefs;
