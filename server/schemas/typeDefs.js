const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tournament {
    _id: ID
    name: String
    host_id: String
    champion_id: String
  }

  type Query {
    tournaments: [Tournament]
  }
  type Mutation {
    testMutation(message: String): Test
  }
`;

module.exports = typeDefs;
