const { Schema } = require("mongoose");

const teamSchema = new Schema(
  {
    // Team properties
    team_name: {
      type: String,
      required: "You need to name the team!",
      minlength: 1,
      maxlength: 100,
    },
    username: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = teamSchema;
