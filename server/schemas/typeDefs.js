// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Test {
    test_data: String
  }
  type Tournament {
    _id: ID
    id: String
    user_id: String
    tournament_name: String
    createdAt: String
    teamsCount: Int
    teams: [Team]
    matchCount: Int
    matches: [Match]
  }
  type Match {
    _id: ID
    id: String
    tournament_id: String
    matchNumber: Int
    round: Int
    next_match: String
  }
  type Team {
    _id: ID
    team_name: String
    tournament_id: String
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
  input TeamInput {
    name: String
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addTournament(tournamentName: String!, userId: String!, tournamentSize: Int, teams: [TeamInput]): Tournament
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

// addTournament(tournament_name: String!): Tournament


// export the typeDefs
module.exports = typeDefs;
