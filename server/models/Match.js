const { Schema } = require("mongoose");
const teamSchema = require('./Team');

const matchSchema = new Schema(
  {
    uid: {
      type: String
    },
    // Match Properties
    tournament_uid: {
      String
    },
    matchNumber: {
      type: Number,
    },
    round: {
      type: Number,
    },
    next_match: {
      type: String
    },
    winner: {
      type: String
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = matchSchema;
