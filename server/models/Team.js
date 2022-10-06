const { Schema } = require("mongoose");

const teamSchema = new Schema(
  {
    // Team properties
    team_name: {
      type: String,
      required: true,
      trim: true,
    },
    tournament_id: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Team = model("Team", teamSchema);

module.exports = Team;
