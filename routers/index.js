const express = require('express');
const { createUser } = require('../controllers/user');
const { createPhone, getPhones } = require('../controllers/phones');
const { createGroup, AddUserToGroup } = require('../controllers/groups');
const phonesRouter = require('./phonesRouter');
const rootRouter = express.Router();

// роутер - спеціальний міддлвер який допомає здійснювати маршрутизацію

// router.get();
// router.delete();
// router.post();

rootRouter.post('/users', createUser);

rootRouter.post('/groups', createGroup);
rootRouter.post('/groups/:groupId/users/:userId', AddUserToGroup);

rootRouter.post('/users/:userId/phones', createPhone);

// rootRouter.use('/phones', phonesRouter );
// rootRouter.use('/cars', carsRouter);

module.exports = rootRouter;
