const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

// Todo.remove()
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '58f8871d4ba7e01e53b6c54e'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('58f8871d4ba7e01e53b6c54e').then((todo) => {
  console.log(todo);
});
