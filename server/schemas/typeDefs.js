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
    winner: String
    prev_match: [Match]
    next_match: [Match]
  }
  type User {
    _id: ID
    username: String
    tournaments: [Tournament]
  }
  type Query {
    users: [User]
    user(username: String!): User
    tournaments(username: String): [Tournament]
    tournament(_id: ID!): Tournament
  }
  type Mutation {
    login(username: String!, password: String!): User
    addUser(username: String!, password: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
