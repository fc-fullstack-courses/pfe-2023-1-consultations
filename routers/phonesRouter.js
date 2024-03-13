const express = require('express');
const { getPhones, getPhone, createPhone } = require('../controllers/phones');
const phonesRouter = express.Router();

// маршрут
// GET http://localhost:5000/phones
phonesRouter.get('/', getPhones);

// GET http://localhost:5000/phones/5
phonesRouter.get('/:id', getPhone);

// Content-type: application / json
phonesRouter.post('/', express.json(), createPhone);

module.exports = phonesRouter;