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

  /* Delete Many */
  // db.collection('Todos').deleteMany({'text': 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  /* Delete One */
  // db.collection('Todos').deleteOne({'text': 'Eat lunch'}).then( (result) => {
  //   console.log(result);
  // });

  /* Find One and Delete */
  // db.collection('Todos').findOneAndDelete({'completed': false}).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({'name': 'Alen'}).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    '_id': new ObjectID('58dd146d0bee706d0b7e3307')
  }).then( (result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
