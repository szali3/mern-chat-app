const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  content: {
    type: String,
    max:50,
  },
  image: {
    type: String,
  },
  likes: {
    type: String,
    default: [],
  },},
  {
    timestamps:true
  }
)

module.exports = mongoose.model('User',PostSchema);