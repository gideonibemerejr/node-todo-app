const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

//fire controlers
todoController(app);


//list to port
app.listen(4000);
console.log('You are listening to port 4000');