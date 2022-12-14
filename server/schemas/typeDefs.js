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
    matches: [Match]
  }
  type Team {
    _id: ID
    team_name: String
    username: String
  }
  type Match {
    _id: ID
    username: String
    round: Int
    matchId: String
    teams: [Team]
    next_match: [Match]
    winner: String
    matchNumber: Int
  }
  type User {
    _id: ID
    username: String
    tournaments: [Tournament]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    tournaments(username: String): [Tournament]
    tournament(_id: ID!): Tournament
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addTournament(tournament_name: String!): Tournament
    addMatch(tournamentId: ID!, matchId: String!): Tournament
    deleteTournament(tournament_name: String!): Tournament
    addTeam(tournamentId: ID!, team_name: String!): Tournament
    addWinner(tournamentId: ID!, winner: String!): Tournament
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
