const { Schema } = require("mongoose");

const matchSchema = new Schema(
  {
    // Match Properties
    username: {
      type: String,
      required: true,
    },
    prev_match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
    },
    next_match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
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

module.exports = matchSchema;
