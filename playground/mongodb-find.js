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

  /* Count number of records inside collection */
  db.collection('Todos').find().count().then( (count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //* Query specific task within collection Todos */
  db.collection('Todos').find({
      '_id': new ObjectID('58d40545cfb24055c06480a1')
  }).toArray().then( (docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  /* Query specific user within collection Users */
  db.collection('Users').find({'name': 'Alen'}).toArray().then( (docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  //db.close();
});
