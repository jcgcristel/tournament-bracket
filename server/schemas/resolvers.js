const { User, Tournament } = require("../models");
<<<<<<< HEAD
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
=======
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
<<<<<<< HEAD
          .select('-__v -password')
          .populate('tournaments')
=======
          .select("-__v -password")
          .populate("tournaments");
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68

        return userData;
      }

<<<<<<< HEAD
      throw new AuthenticationError('Not logged in');
=======
      throw new AuthenticationError("Not logged in");
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
    },
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
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
<<<<<<< HEAD
        throw new AuthenticationError('Incorrect credentials');
=======
        throw new AuthenticationError("Incorrect credentials");
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
<<<<<<< HEAD
        throw new AuthenticationError('Incorrect credentials');
=======
        throw new AuthenticationError("Incorrect credentials");
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
      }

      const token = signToken(user);
      return { token, user };
    },
    addTournament: async (parent, args, context) => {
      if (context.user) {
<<<<<<< HEAD
        const tournament = await Tournament.create({ ...args, username: context.user.username });
        
=======
        const tournament = await Tournament.create({
          ...args,
          username: context.user.username,
        });

>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { tournaments: tournament._id } },
          { new: true }
        );
<<<<<<< HEAD
        return tournament;
      }
      
    }
  }
=======

        return tournament;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addTeam: async (parent, { tournamentId, team_name }, context) => {
      if (context.user) {
        const updatedTournament = await Tournament.findOneAndUpdate(
          { _id: tournamentId },
          { $push: { teams: { team_name, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedTournament;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
  },
>>>>>>> ec790a608e6a156d643ef7003fcb0283470a1f68
};

module.exports = resolvers;
