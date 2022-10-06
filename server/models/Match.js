const { Schema } = require("mongoose");

const matchSchema = new Schema(
  {
    // Match Properties
    tournament_id: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
    prev_match: {
      type: Schema.Types.ObjectId,
      ref: this,
      required: false,
    },
    next_match: {
      type: Schema.Types.ObjectId,
      ref: this,
      required: false,
    },
    winner_id: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Match = model("Match", matchSchema);

module.exports = Match;
