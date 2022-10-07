const { User, Tournament } = require("../models");

const resolvers = {
  Query: {
    /* 
            OPERATION EXAMPLE (Paste into GraphQL Operation):
            {
                testQuery
            }
        */
    testQuery: () => {
      return "Hello World";
    },
  },

  Mutation: {
    /* 
            OPERATION EXAMPLE (Paste into GraphQL Operation):
            mutation testMutation($message: String!) {
                testMutation(message: $message) {
                    message
                  }
                }
            }
        */
    testMutation: async (parent, { message }) => {
      const test = { message: message };

      return test;
    },
  },
};

module.exports = resolvers;
