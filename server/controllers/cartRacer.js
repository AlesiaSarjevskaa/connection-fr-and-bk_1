const CartRacers = require("../dto/CartRacer");

exports.getAllCartRacers = async (req, res, next) => {
  const data = await new CartRacers().getCartRacers();
  if (data && data.length !== 0) {
    return res.send({
      msg: "CartRacers found!",
      payload: data,
    });
  }
  return res.send({
    msg: "CartRacers not found",
  });
};
exports.getCartRacerById = async (req, res, next) => {
  const data = await new CartRacers().getCartRacer(req.params.id);
  if (data) {
    return res.send({
      msg: "CartRacer found!",
      payload: data,
    });
  }
  return res.send({
    msg: "CartRacer not found",
  });
};
exports.createCartRacer = async (req, res, next) => {
  const data = await new CartRacers().createCartRacer(req.body);
  if (data) {
    return res.send({
      msg: "CartRacer created!",
      payload: data,
    });
  }
  return res.send({
    msg: "CartRacer not created",
  });
};
exports.updateCartRacer = async (req, res, next) => {
  const data = await new CartRacers().updateCartRacer(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "CartRacer updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "CartRacer not updated",
  });
};
exports.deleteCartRacer = async (req, res, next) => {
  const data = await new CartRacers().deleteCartRacer(req.params.id);
  if (data) {
    return res.send({
      msg: "CartRacer deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "CartRacer not deleted",
  });
};
