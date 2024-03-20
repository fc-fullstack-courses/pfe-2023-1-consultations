const { Phone, User } = require('../models');
module.exports.getPhones = async (request, response, next) => {
  // складний код
  const phones = [{ id: 0 }, { id: 1 }];

  response.send({ data: phones });
};

module.exports.getPhone = async (request, response, next) => {
  console.log(request.params.id); // 5
  // складний код
  const phone = { id: request.params.id };

  response.send({ data: phone });
};

module.exports.createPhone = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;

  const user = await User.findByPk(userId);

  const newPhone = await user.createPhone(body);

  res.send({ data: newPhone });
};
