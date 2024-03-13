const express = require('express');
const { middleware1, middleware2 } = require('./middlewares');
const {
  sequelizeErrorMiddleware,
  errorMiddleware,
} = require('./middlewares/errors');

const app = express();

// маршрут
// GET http://localhost:5000/phones
app.get('/phones', async (request, response, next) => {
  // складний код
  const phones = [{ id: 0 }, { id: 1 }];

  response.send({ data: phones });
});

// GET http://localhost:5000/phones/5
app.get('/phones/:id', async (request, response, next) => {
  console.log(request.params.id); // 5
  // складний код
  const phones = [{ id: 0 }, { id: 1 }];

  response.send({ data: phones });
});

// міддлвери - проміжні обробники на певному запиті
app.get('/cars', middleware1, middleware2, async (request, response, next) => {
  // складний код
  const cars = [{ id: 12320 }, { id: 112322 }];

  response.send({ data: cars, number: request.data });
});

// Content-type: application / json
app.post('/phones', express.json(), async (req, res, next) => {
  const { body } = req;
  const newPhone = { id: 2 };

  res.send({ data: newPhone });
});

// міддлвер на всі маршрути на сервері
app.use(sequelizeErrorMiddleware, errorMiddleware);
// міддлвер на всі маршрути на сервері які починаються на test
// http://localhost:5000/test/ ....
// app.use('/test',errorMiddleware);

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started');
});
