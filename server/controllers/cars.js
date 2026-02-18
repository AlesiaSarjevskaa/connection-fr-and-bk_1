const Cars = require("../dto/Cars");

exports.getAllCars = async (req, res, next) => {
  const data = await new Cars().getCars();
  if (data && data.length !== 0) {
    return res.status(200).send({
      msg: "Cars found!",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Cars not found",
  });
};
exports.getCarById = async (req, res, next) => {
  const data = await new Cars().getCar(req.params.id);
  if (data) {
    return res.status(200).send({
      msg: "Car found!",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Car not found",
  });
};
exports.createCar = async (req, res, next) => {
  const data = await new Cars().createCar(req.body);
  if (data) {
    return res.status(200).send({
      msg: "Car created!",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Car not created",
  });
};
exports.updateCar = async (req, res, next) => {
  const data = await new Cars().updateCar(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "Car updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "Car not updated",
  });
};
exports.deleteCar = async (req, res, next) => {
  const data = await new Cars().deleteCar(req.params.id);
  if (data) {
    return res.send({
      msg: "Car deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "Car not deleted",
  });
};
