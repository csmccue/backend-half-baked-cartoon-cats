const express = require('express');

const app = express();


app.use('/cats', require ('./controllers/cats'));
app.use('/', require ('./controllers/cats'));

module.exports = app;
