var express       = require('express');
var bodyParser    = require('body-parser');
var {ObjectID}  = require('mongodb');

var {mongoose}    = require('./db/mongoose');
var {Todo}        = require('./models/todo');
var {User}        = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }


  Todo.findById(id).then((todo) => {
    if (todo) {
      res.send({todo});
    } else {
      return res.status(404).send();
    }

  }).catch((e) => {
    res.status(400).send(e);
  });

});

app.listen(3319, () => {
  console.log('Started on port 3319');
});

module.exports = {
  app: app
};