const { Schema } = require("mongoose");
const teamSchema = require('./Team');

const matchSchema = new Schema(
  {
    id: {
      type: String
    },
    // Match Properties
    tournament_id: {
      type: Schema.Types.ObjectId,
      ref: "Tournament"
    },
    matchNumber: {
      type: Number,
    },
    round: {
      type: Number,
    },
    next_match: {
      type: Schema.Types.ObjectId,
      ref: "Match"
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = matchSchema;
