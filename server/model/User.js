const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
  },
  {
    password: {
      type: String,
      require: true,
      min: 6,
    },
  },
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    following: {
      type: String,
      default: [],
    },
  },
  {
    followers: {
      type: String,
      default: [],
    },
  },
  {
    profilePicture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
