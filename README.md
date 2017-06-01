# node-course-2-todo-api
Node.js API for managing To-Do notes


This code was developed for educational purposes only during online course on Udemy
(https://www.udemy.com/the-complete-nodejs-developer-course-2), chapters 7 & 8.

USAGE:
<ul>
<li>$ git clone https://github.com/AlenRedek/node-course-2-todo-api.git</li>
<li>$ cd node-course-2-todo-api/</li>
<li>Now it's time to create a config file, otherwise the api won't start.<br />You should create a file inside server/config/config.json and place the JSON, which should look something like this:<br />
```javascript
{
  "test": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
    "JWT_SECRET": "salt1"
  },
  "development": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
    "JWT_SECRET": "salt2"
  }
}
</li>
<li>$ npm install</li>
<li>$ npm start</li>
<li>When the server is up & running, you should be able to make HTTP requests using Postman for example.<br />
I have exported these request in a separate file (todo-app.postman_collection) as well</li>
<li>You should first authenticate first by making a POST request to /users/login route and obtain a valid token.<br />After that other requests shouldn't respond with 401 unauthorized error.</li>
</ul>
