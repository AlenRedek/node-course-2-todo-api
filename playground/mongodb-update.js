//const MongoClient = require('mongodb').MongoClient;
// Object destructuring (does the same as code above)
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); // Contains new id for document field
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   '_id': new ObjectID('58dd06570bee706d0b7e2f4c')
  // }, {
  //   $set: {
  //     'completed': false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    '_id': new ObjectID('58dd0182ca32d519e16c0c77')
  }, {
    $set: {
      'name': 'Alen'
    },
    $inc: {
      'age': 1
    }
  });

  //db.close();
});