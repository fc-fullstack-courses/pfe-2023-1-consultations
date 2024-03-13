const express = require('express');
const { middleware1, middleware2 } = require('./middlewares');
const {
  sequelizeErrorMiddleware,
  errorMiddleware,
} = require('./middlewares/errors');
const { getPhones, getPhone, createPhone } = require('./controllers/phones');
const { getCars } = require('./controllers/cars');

const app = express();

// роутер - спеціальний міддлвер який допомає здійснювати маршрутизацію

const rootRouter = express.Router();
const phonesRouter = express.Router();
const carsRouter = express.Router();

// router.get();
// router.delete();
// router.post();

// маршрут
// GET http://localhost:5000/phones
phonesRouter.get('/', getPhones);

// GET http://localhost:5000/phones/5
phonesRouter.get('/:id', getPhone);

// Content-type: application / json
phonesRouter.post('/', express.json(), createPhone);

// міддлвери - проміжні обробники на певному запиті
carsRouter.get('/', middleware1, middleware2, getCars);

rootRouter.use('/phones', phonesRouter );
rootRouter.use('/cars', carsRouter);

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
