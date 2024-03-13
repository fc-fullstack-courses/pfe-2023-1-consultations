const express = require('express');

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

const middleware1 = async (req, res, next) => {
  // міддлвер 1
  const result = Math.random() > 0.5;
  console.log(result);

  req.data = Math.random();

  if (result) {
    next();
  } else {
    res.send('middleware validation failure');
    // ERROR
    // res.send('middleware validation failure');
  }
};

// міддлвери - проміжні обробники на певному запиті
app.get(
  '/cars',
  middleware1,
  async (request, response, next) => {
    const result = Math.random() > 0.5;

    if (!result) {
      next();
    } else {
      next(new Error('bad stuff'));
    }
  },
  async (request, response, next) => {
    // складний код
    const cars = [{ id: 12320 }, { id: 112322 }];

    response.send({ data: cars, number: request.data });
  }
);

// Content-type: application / json
app.post('/phones', express.json(), async (req, res, next) => {
  const { body } = req;
  const newPhone = { id: 2 };

  res.send({ data: newPhone });
});

// міддлвери для помилок
const sequelizeErrorMiddleware = async (err, req, res, next) => {
  if(err.message = 'sequelize') {
    res.send({ text: 'bad stuff with sequelize', });
  } else {
    next(err);
  }
};

const errorMiddleware = async (err, req, res, next) => {
  res.send({ text: err.message, });
};

// міддлвер на всі маршрути на сервері
app.use(sequelizeErrorMiddleware, errorMiddleware);
// міддлвер на всі маршрути на сервері які починаються на test
// http://localhost:5000/test/ ....
// app.use('/test',errorMiddleware);

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started');
});