module.exports.getCars = async (request, response, next) => {
  // складний код
  const cars = [{ id: 12320 }, { id: 112322 }];

  response.send({ data: cars, number: request.data });
}