const express = require('express');
const { middleware1, middleware2 } = require('./middlewares');
const {
  sequelizeErrorMiddleware,
  errorMiddleware,
} = require('./middlewares/errors');
const { getCars } = require('./controllers/cars');
const rootRouter = require('./routers');

const app = express();

const carsRouter = express.Router();

// міддлвери - проміжні обробники на певному запиті
carsRouter.get('/', middleware1, middleware2, getCars);
app.use(express.json());
app.use(rootRouter);

// міддлвер на всі маршрути на сервері
app.use(sequelizeErrorMiddleware, errorMiddleware);
// міддлвер на всі маршрути на сервері які починаються на test
// http://localhost:5000/test/ ....
// app.use('/test',errorMiddleware);

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started');
});
