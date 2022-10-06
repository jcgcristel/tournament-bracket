const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        testQuery: String
    }

    type Mutation {
        testMutation: String
    }
`;

module.exports = typeDefs;