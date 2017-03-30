var mongoose = require('mongoose');

// Set type of promise which Mongoose should use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Define a User model
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  }
});

var newUser = new User({
  email: 'alen@redek.me'
});

newUser.save().then( (doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save user');
});

// Define a Todo model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: 'Something to do',
});

newTodo.save().then( (doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo');
});
