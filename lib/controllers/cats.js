const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/cats', (req, res) => {
    const data = [];
    for (const kitty of cats) {
      data.push({ id: kitty.id, name: kitty.name });
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

