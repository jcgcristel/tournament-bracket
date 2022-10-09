const { User, Tournament } = require('../models');

const resolvers = {
  Query: {
    tournaments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Tournament.find(params).sort({ createdAt: -1 });
    },
  }
};
  
  module.exports = resolvers;