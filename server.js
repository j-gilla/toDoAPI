let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
let Task = require('./api/models/toDoModels');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/toDoRoutes');
routes(app);

app.listen(port);
console.log("All watched over by port " + port + " of loving grace");
