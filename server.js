const express = require('express');
const { middleware1, middleware2 } = require('./middlewares');
const {
  sequelizeErrorMiddleware,
  errorMiddleware,
} = require('./middlewares/errors');
const { getPhones, getPhone, createPhone } = require('./controllers/phones');
const { getCars } = require('./controllers/cars');

const app = express();

// маршрут
// GET http://localhost:5000/phones
app.get('/phones', getPhones);

// GET http://localhost:5000/phones/5
app.get('/phones/:id', getPhone);

// міддлвери - проміжні обробники на певному запиті
app.get('/cars', middleware1, middleware2, getCars);

// Content-type: application / json
app.post('/phones', express.json(), createPhone);

// міддлвер на всі маршрути на сервері
app.use(sequelizeErrorMiddleware, errorMiddleware);
// міддлвер на всі маршрути на сервері які починаються на test
// http://localhost:5000/test/ ....
// app.use('/test',errorMiddleware);

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started');
});
