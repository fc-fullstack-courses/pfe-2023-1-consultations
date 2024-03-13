const express = require('express');
const rootRouter = express.Router();

// роутер - спеціальний міддлвер який допомає здійснювати маршрутизацію

// router.get();
// router.delete();
// router.post();

rootRouter.use('/phones', phonesRouter );
rootRouter.use('/cars', carsRouter);

module.exports = rootRouter;