const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    // User properties
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    tournaments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tournament",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
