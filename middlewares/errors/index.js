// міддлвери для помилок
const sequelizeErrorMiddleware = async (err, req, res, next) => {
  if ((err.message = 'sequelize')) {
    res.send({ text: 'bad stuff with sequelize' });
  } else {
    next(err);
  }
};

const errorMiddleware = async (err, req, res, next) => {
  res.send({ text: err.message });
};

module.exports.sequelizeErrorMiddleware = sequelizeErrorMiddleware;
module.exports.errorMiddleware = errorMiddleware;