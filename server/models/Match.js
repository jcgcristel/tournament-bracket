const { Schema } = require("mongoose");
const teamSchema = require('./Team');

const matchSchema = new Schema(
  {
    // Match Properties
    username: {
      type: String,
    },
    round: {
      type: Number,
    },
    matchId: {
      type: String,
    },
    teams: [teamSchema],
    next_match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
    },
    winner: {
      type: String,
    },
    matchNumber: {
      type: Number,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = matchSchema;
