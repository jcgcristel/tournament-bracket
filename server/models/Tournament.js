const { Schema, model } = require("mongoose");
const teamSchema = require('./Team');
const matchSchema = require('./Match');
const dateFormat = require('../utils/dateFormat');

const tournamentSchema = new Schema(
  {
    // Tournament properties
    tournament_name: {
      type: String,
      required: "You need to name the tournament!",
      minlength: 1,
      maxlength: 100,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    teams: [teamSchema],
    matches: [matchSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tournament = model("Tournament", tournamentSchema);

module.exports = Tournament;
