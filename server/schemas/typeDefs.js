const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Test {
    message: String
  }
  type Query {
    testQuery: String
  }
  type Mutation {
    testMutation(message: String): Test
  }
`;

module.exports = typeDefs;
