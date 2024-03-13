
module.exports.getPhones = async (request, response, next) => {
  // складний код
  const phones = [{ id: 0 }, { id: 1 }];

  response.send({ data: phones });
}

module.exports.getPhone = async (request, response, next) => {
  console.log(request.params.id); // 5
  // складний код
  const phone = { id: request.params.id };

  response.send({ data: phone });
}

module.exports.createPhone =  async (req, res, next) => {
  const { body } = req;
  const newPhone = { id: 2 };

  res.send({ data: newPhone });
}