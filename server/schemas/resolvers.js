const { User, Tournament } = require("../models");

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
      return User.find().select("-__v -password").populate("tournaments");
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

      return user;
    },
    login: async () => {},
  },
};

module.exports = resolvers;
