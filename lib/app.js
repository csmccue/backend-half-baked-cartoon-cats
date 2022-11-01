const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require ('./controllers/cats'));
app.use('/cats', require ('./controllers/cats'));
app.use('/cats/:id', require ('./controllers/cats'));

module.exports = app;
