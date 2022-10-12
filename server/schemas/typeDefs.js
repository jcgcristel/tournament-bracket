// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Test {
    test_data: String
  }
  type Tournament {
    _id: ID
    uid: String
    user_id: String
    tournament_name: String
    createdAt: String
    teamsCount: Int
    teams: [Playing]
    matchCount: Int
    matches: [Match]
  }
  type Playing {
    teams: [Team]
  }
  type Match {
    _id: ID
    uid: String
    tournament_uid: String
    matchNumber: Int
    round: Int
    teams: [TournamentMatch]
    winner: String
    next_match: String
  }
  type TournamentMatch {
    playing: [Team]
  }
  type Team {
    _id: ID
    team_name: String
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
  input MatchInput {
    teams_playing: [TeamInput]
  }
  input TeamInput {
    team_name: String
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addTournament(tournamentName: String!, userId: String!, teams: [MatchInput]): Tournament
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
