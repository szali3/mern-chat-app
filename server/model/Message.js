const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    coversationID: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", MessageSchema);
