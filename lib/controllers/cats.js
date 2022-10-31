const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/cats', (req, res) => {
    const data = [];
    for (const kitty of cats) {
      data.push(kitty);
    }
    res.json(data);
  })

  .get('/', (req, res) => {
    const data = [];
    for (const kitty of cats) {
      data.push(kitty);
    }
    res.json('hello there!');
  });

