const express = require('express');

const app = express();



app.use('/', require ('./controllers/cats'));
app.use('/cats', require ('./controllers/cats'));

module.exports = app;
