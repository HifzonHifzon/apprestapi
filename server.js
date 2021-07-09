const bodyParser = require('body-parser');
const express = require('express');
var morgan = require('morgan');

const app = express();


/* Parse Application JSON */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

/* Panggil routes*/
var routes = require('./routes');
routes(app);

app.use('/auth', require('./middleware'));

app.listen(5000, () => {
    console.log(`Server started on port`);
});

