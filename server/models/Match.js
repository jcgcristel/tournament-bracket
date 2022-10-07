const { Schema } = require("mongoose");

const matchSchema = new Schema(
  {
    // Match Properties
    tournament_name: {
      type: String,
      required: true,
    },
    prev_match: {
      type: Schema.Types.ObjectId,
      ref: this,
    },
    next_match: {
      type: Schema.Types.ObjectId,
      ref: this,
    },
    winner: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = Match;
