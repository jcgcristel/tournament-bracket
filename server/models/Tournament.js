const { Schema, model } = require("mongoose");

const tournamentSchema = new Schema(
  {
    // Tournament properties
    tournament_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    host_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    champion_id: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
const Tournament = model("Tournament", tournamentSchema);

module.exports = Tournament;
