const { Schema, model } = require("mongoose");
const teamSchema = require('./Team');
const matchSchema = require('./Match');
const dateFormat = require('../utils/dateFormat');
const { log2 } = require('mathjs');

const tournamentSchema = new Schema(
  {
    id: {
      type: String
    },
    // Tournament properties
    tournament_name: {
      type: String,
      required: [true, "You need to name the tournament."],
      minlength: 1,
      maxlength: [50, "Tournament name must be 30 characters or less."],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    teams: [teamSchema],
    matches: [[matchSchema]]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

tournamentSchema.virtual('teamsCount').get(function() {
  return this.teams.length;
});

tournamentSchema.virtual('matchCount').get(function() {
  return this.matches.length;
});

tournamentSchema.virtual('rounds').get(function() {
  return log2(this.teams.length);
});

const Tournament = model("Tournament", tournamentSchema);

module.exports = Tournament;
