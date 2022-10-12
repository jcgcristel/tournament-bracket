const { Schema } = require("mongoose");

const teamSchema = new Schema(
  {
    // Team properties
    team_name: {
      type: String,
      required: [true, "You need to name the team."],
      minlength: 1,
      maxlength: [30, "Team name must be 30 characters or less."],
    },
    // tournament_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Tournament"
    // },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = teamSchema;
