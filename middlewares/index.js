
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

module.exports.middleware1 = middleware1;

module.exports.middleware2 = async (request, response, next) => {
  const result = Math.random() > 0.5;

  if (!result) {
    next();
  } else {
    next(new Error('bad stuff'));
  }
};