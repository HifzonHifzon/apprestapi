const bodyParser = require('body-parser');
const express = require('express');
const app = express();


/* Parse Application JSON */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(5000, () => {
    console.log(`Server started on port`);
});

