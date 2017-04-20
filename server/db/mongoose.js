var mongoose = require('mongoose');

// Set type of promise which Mongoose should use
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose: mongoose
}
