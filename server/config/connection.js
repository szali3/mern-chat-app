const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/mernChat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
