const express = require('express');

const app = express();

// маршрут
// GET http://localhost:5000/phones
app.get('/phones', async (request, response, next) => {
  // складний код
  const phones = [{ id: 0 }, { id: 1 }];

  response.send({ data: phones });
});

app.get('/cars', async (request, response, next) => {
  // складний код
  const cars = [{ id: 12320 }, { id: 112322 }];

  response.send({ data: cars });
});

app.post('/phones', async (req, res, next) => {
  const newPhone = { id: 2 };

  res.send({ data: newPhone });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started');
});
