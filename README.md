# Node.js To-Do API
Node.js API for managing To-Do notes.

USAGE:
<ul>
<li>$ git clone https://github.com/AlenRedek/node-todo-api.git</li>
<li>$ cd node-todo-api/</li>
<li>For testing purposes it is okay to have config file included inside a public repository - server/config/config.json</li>
<li>$ npm install</li>
<li>$ npm start</li>
<li>When the server is up & running, you should be able to make HTTP requests using Postman for example.<br />
I have exported these requests to a separate file (todo-app.postman_collection) as well.</li>
<li>You should authenticate first by making a POST request to /users/login route and obtain a valid token.<br />
After that other requests shouldn't respond with 401 unauthorized response code.</li>
</ul>
