const { User, Tournament } = require("../models");
const { signToken } = require("../utils/auth");
const TournamentObj = require("../utils/generateTournament");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("tournaments");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addTournament: async (parent, args, context) => {
      // if (context.user) {
        
        // Destructure args to be used to create TournamentObject
        const { tournamentName, userId, teams } = args;
        const tournamentSize = teams.length;

        const _tournament = new TournamentObj(tournamentName, userId, tournamentSize, teams);

        _tournament.generateMatches();
        _tournament.sortMatches();
        _tournament.setFirstRoundTeamMatchups();        
      
        const tournament = await Tournament.create({
          uid: _tournament.tournament_uid,
          user_id: _tournament.user_id,
          tournament_name: _tournament.tournament_name,
          teamsCount: _tournament.tournamentSize,
          teams: _tournament.teams,
          matches: _tournament.matches
          // username: context.user.username,
        });

        await User.findByIdAndUpdate(
          // { _id: context.user._id },
          { _id: tournament.user_id },
          { $push: { tournaments: tournament._id } },
          { new: true }
        );

        return tournament;
      }

      // throw new AuthenticationError("You need to be logged in!");
    // }
    ,
    deleteTournament: async (parent, args, context) => {
      if (context.user) {
        const tournament = await Tournament.findOneAndDelete({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { tournaments: tournament._id } },
          { new: true }
        );

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

      throw new AuthenticationError("You need to be logged in!");
    },
    addMatch: async (parent, { tournamentId, matchId }, context) => {
      if (context.user) {
        const updatedTournament = await Tournament.findOneAndUpdate(
          { _id: tournamentId },
          { $push: { matches: { matchId, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedTournament;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addWinner: async (parent, { tournamentId, winner }, context) => {
      if (context.user) {
        const updatedTournament = await Tournament.findOneAndUpdate(
          { _id: tournamentId },
          { $push: { matches: { winner, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedTournament;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
