const { User, Tournament } = require('../models');

const resolvers = {
    Query: {
        testQuery: () => {
            return "Hello World";
        }
    },

    Mutation: {
        testMutation: (parent, args) => {
            return args;
        }
    }
}

module.exports = resolvers;