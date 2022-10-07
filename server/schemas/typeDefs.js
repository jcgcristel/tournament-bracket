const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Query {
    helloWorld: String
  }

  type Mutation {
    testMutation(message: String): Test
  }
`;

module.exports = typeDefs;