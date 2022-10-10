const { User, Tournament } = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // get all tournaments
    tournaments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Tournament.find(params).sort({ createdAt: -1 });
    },
    // get a tournament by id
    tournament: async (parent, { _id }) => {
      return Tournament.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("tournaments");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("tournaments");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  }
};

module.exports = resolvers;
