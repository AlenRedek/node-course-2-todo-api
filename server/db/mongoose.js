var mongoose = require('mongoose');

// Set type of promise which Mongoose should use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
}
