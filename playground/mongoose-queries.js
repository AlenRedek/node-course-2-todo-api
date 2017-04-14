const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

var userId = ('58dd2a06a11a4fe11b17d77a');

if (!ObjectID.isValid(userId)) {
  return console.log('Id not valid');
}

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by Id', JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

// var todoId = '58f0d6b7e7700e4766655e6c';
//
// if (!ObjectID.isValid(todoId)) {
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(todoId).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });
