const { User, Tournament } = require('../models');

const resolvers = {
  Query: {
    tournaments: async () => {
      return Tournament.find().sort({ createdAt: -1 });
    }
  }
};
  
  module.exports = resolvers;