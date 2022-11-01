const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/cats/:id', (req, res) => {
    let match = '';
    for (const kitty of cats) {
      if (kitty.id === req.params.id) {
        match = kitty;
      }
    }
    res.json(match);
  })

  .get('/cats', (req, res) => {
    const data = [];
    for (const kitty of cats) {
      data.push({ id: kitty.id, name: kitty.name });
    }
    res.json(data);
  })

  .get('/', (req, res) => {
    res.json('hello there!');
  });

