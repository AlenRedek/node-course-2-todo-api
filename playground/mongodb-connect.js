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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Branko',
    age: 26,
    location: 'Koper'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
